var gulp = require('gulp'),
  buildConfig = require('./config/build.config'),
  concat = require('gulp-concat'),
  argv = require('minimist')(process.argv.slice(2)),
  footer = require('gulp-footer'),
  header = require('gulp-header'),
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify'),
  karma = require('karma').server,
  karmaConf = require('./config/karma.conf.js');
  rename = require('gulp-rename');

gulp.task('default', ['build', 'copy-to-demo-app']);

gulp.task('build', function() {
  return gulp.src(buildConfig.jsFiles)
    .pipe(concat('ng-cordova.js'))
    .pipe(header(buildConfig.closureStart))
    .pipe(footer(buildConfig.closureEnd))
    .pipe(header(buildConfig.banner))
    .pipe(gulp.dest(buildConfig.dist))
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest(buildConfig.dist));
});

gulp.task('copy-to-demo-app', function(){
  gulp.src([buildConfig.dist+'/*.js'])
    .pipe(gulp.dest(buildConfig.demoAppNgCordovaLib));
});

gulp.task('karma', function(done) {
  karmaConf.singleRun = true;
  argv.browsers && (karmaConf.browsers = argv.browsers.trim().split(','));
  argv.reporters && (karmaConf.reporters = argv.reporters.trim().split(','));

  karma.start(karmaConf, done);
});

gulp.task('karma-watch', function(done) {
  console.log(karmaConf);
  karmaConf.singleRun = false;
  karma.start(karmaConf, done);
});

gulp.task('watch', ['build', 'copy-to-demo-app'], function() {
  gulp.watch(['src/**/*.js', 'test/**/*.js'], ['build', 'copy-to-demo-app']);
});
