var gulp = require('gulp'),
    babel = require('gulp-babel'),
    traceur = require('gulp-traceur'),
    cache = require('gulp-cached'),
    concat = require('gulp-concat'),
    minimist = require('minimist'),
    connect = require('gulp-connect');

var traceurOptions = {
  annotations: true,
  types: true,
  outputLanguage: 'es6'
}

var babelOptions = {
  optional: ['es7.decorators'],
  modules: "system",
  moduleIds: true,
  getModuleId: function(name) {
    return "app/" + name;
  }
};

var flagConfig = {
  string: 'port',
  default: { port: 8100 }
};

var flags = minimist(process.argv.slice(2), flagConfig);

gulp.task('serve', ['bundle'], function() {
  connect.server({
    port: flags.port,
    livereload: false
  });
});

gulp.task('watch', ['serve'], function(){
  gulp.watch('js/**/*.js', ['bundle']);
});

gulp.task('transpile', function() {
  return gulp.src(['js/**/*.js', '!js/lib/**/*'])
             .pipe(cache('transpile', { optimizeMemory: true }))
             .pipe(traceur(traceurOptions))
             .on('error', function (err) {
               console.log("ERROR: " + err.message);
               this.emit('end');
             })
             .pipe(babel(babelOptions))
             .on('error', function (err) {
               console.log("ERROR: " + err.message);
               this.emit('end');
             })
             .pipe(gulp.dest('dist/js/'))
});

gulp.task('bundle', ['transpile'], function() {
  return gulp.src(['dist/js/**/*.js', '!js/**/*'])
             .pipe(concat('app.bundle.js'))
             .pipe(gulp.dest('dist/'));
});
