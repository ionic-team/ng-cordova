var gulp = require('gulp'),
    tsc = require('gulp-typescript');
    babel = require('gulp-babel'),
    webpack = require('gulp-webpack'),
    del = require('del'),
    cache = require('gulp-cached'),
    concat = require('gulp-concat'),
    minimist = require('minimist'),
    connect = require('gulp-connect'),
    runSequence = require('run-sequence');

function getBabelOptions(moduleType) {
  return {
    modules: moduleType || "system",
    moduleIds: true,
    getModuleId: function(name) {
      return "app/" + name;
    }
  }
}

var tscOptions = {
  target: 'ES6',
  allowNonTsExtensions: true,
  isolatedModules: true,
  emitDecoratorMetadata: true,
  experimentalDecorators: true,
  noEmitOnError: false,  // ignore errors
  rootDir: '.'
}

var tscReporter = {
  error: function (error) {
    console.error(error.message);
  }
};

var flagConfig = {
  string: 'port',
  default: { port: 8100 }
};

gulp.task('systemjs.watch', function(done) {
  gulp.watch('app/**/*.js', ["bundle.systemjs"]);
  gulp.watch('app/**/*.html', ['copy-html']);
  done();
});

gulp.task('webpack.watch', function(done) {
  gulp.watch('app/**/*.js', ["transpile.commonjs"]);
  gulp.watch('app/**/*.html', ['copy-html']);
  done();
});

function watch(buildType, done) {
  //systemjs or webpack
  var buildName = "build." + buildType;
  var watchName = buildType + ".watch";

  runSequence(
    'clean',
    'serve',
    watchName,
    buildName,
    done
  );
}

function transpile(moduleType) {
  var stream = gulp.src(['app/**/*.js'])
    .pipe(cache('transpile', { optimizeMemory: true }))
    // transpile to es6 with typescript compiler for decorators
    // you could have type checking by changing the reporter
    // but we don't use it
    .pipe(tsc(tscOptions, null, tscReporter))
    .on('error', function (err) {
      stream.emit('end');
    })
    // lower es6 to es5 wrapped in System.register() using babel
    .pipe(babel(getBabelOptions(moduleType)))
    .on('error', function (err) {
      console.log("ERROR: " + err.message);
      this.emit('end');
    })
    .pipe(gulp.dest('www/_app'));

  return stream;
}

var flags = minimist(process.argv.slice(2), flagConfig);

gulp.task('serve', function() {
  connect.server({
    root: 'www',
    port: flags.port,
    livereload: false
  });
});

gulp.task('clean', function(done) {
  del(['www/_app'], done);
});

gulp.task('transpile.systemjs', function(){ return transpile("system") });
gulp.task('transpile.commonjs', function(){ return transpile("common") });

gulp.task('copy-html', function() {
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('www/_app'));
});

gulp.task('copy-lib', function() {
  return gulp.src([
      'lib/ionic/js/bundle.js',
      'lib/ng-cordova/ng-cordova.js',
      //'lib/**/*.js',
      'lib/**/*.css',
      'lib/**/fonts/**/*'
    ])
    .pipe(gulp.dest('www/lib'));
});

gulp.task('bundle.systemjs', ['transpile.systemjs'], function(done){
  return gulp.src(['www/_app/**/*.js', '!www/_app/app.bundle.js'])
    .pipe(concat('app.bundle.js'))
    .pipe(gulp.dest('www/_app'))
});

gulp.task('bundle.webpack', ['transpile.commonjs'], function() {
  var config = require('./webpack.config.js');
  return gulp.src("www/_app/app.js")
    .pipe(webpack(config))
    .pipe(gulp.dest('./'));
});

gulp.task('build.systemjs', ['copy-lib', 'copy-html', 'bundle.systemjs']);
gulp.task('build.webpack', ['copy-lib', 'copy-html', 'bundle.webpack']);

gulp.task('watch.systemjs', function(done){
  watch("systemjs", done);
});

gulp.task('watch.webpack', function(done){
  watch("webpack", done);
});
