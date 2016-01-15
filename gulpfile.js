var gulp = require('gulp'),
  buildConfig = require('./config/build.config'),
  concat = require('gulp-concat'),
  argv = require('minimist')(process.argv.slice(2)),
  footer = require('gulp-footer'),
  header = require('gulp-header'),
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify'),
  karma = require('karma').server,
  karmaConf = require('./config/karma.conf.js'),
  rename = require('gulp-rename'),
  shell = require('gulp-shell'),
  prettify = require('gulp-prettify'),
  changelog = require('conventional-changelog'),
  q = require('q'),
  fs = require('fs'),
  jscs = require('gulp-jscs'),
  git = require('gulp-git');

gulp.task('default', ['git', 'build']);

gulp.task('lint', ['jshint', 'jscs']);

gulp.task('build', function () {
  gulp.src(buildConfig.mockFiles)
    .pipe(concat('ng-cordova-mocks.js'))
    .pipe(header(buildConfig.closureStart))
    .pipe(footer(buildConfig.closureEnd))
    .pipe(header(buildConfig.banner))
    .pipe(gulp.dest(buildConfig.dist))
    .pipe(uglify())
    .pipe(header(buildConfig.banner))
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest(buildConfig.dist));

  return gulp.src(buildConfig.pluginFiles)
    .pipe(concat('ng-cordova.js'))
    .pipe(header(buildConfig.closureStart))
    .pipe(footer(buildConfig.closureEnd))
    .pipe(header(buildConfig.banner))
    .pipe(gulp.dest(buildConfig.dist))
    .pipe(gulp.dest(buildConfig.demo.ngCordova))
    .pipe(uglify())
    .pipe(header(buildConfig.banner))
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest(buildConfig.dist))
    .pipe(gulp.dest(buildConfig.demo.ngCordova));
});

gulp.task('changelog', function () {
  var version = buildConfig.versionData.version;
  var dest = 'CHANGELOG.md';
  return makeChangelog(version).then(function (log) {
    fs.writeFileSync(dest, log);
  });
});

function makeChangelog(version) {
  var file = __dirname + '/CHANGELOG.md';
  var deferred = q.defer();
  changelog({
    repository: 'https://github.com/driftyco/ng-cordova',
    version: version,
    file: file
  }, function (err, log) {
    if (err) deferred.reject(err);
    else deferred.resolve(log);
  });
  return deferred.promise;
}

gulp.task('karma', function (done) {
  karmaConf.singleRun = true;
  argv.browsers && (karmaConf.browsers = argv.browsers.trim().split(','));
  argv.reporters && (karmaConf.reporters = argv.reporters.trim().split(','));
  karma.start(karmaConf, done);
});

gulp.task('jshint', function () {
  return gulp.src('./src/plugins/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('jscs', function () {
  gulp.src('src/plugins/*.js')
    .pipe(jscs({
      fix: true,
      "requireSpaceAfterKeywords": ['function']
    }))
    .pipe(gulp.dest('src/plugins/'));


  gulp.src('./src/mocks/*.js')
    .pipe(jscs({
      fix: true,
      "requireSpaceAfterKeywords": ['function']
    }))
    .pipe(gulp.dest('src/mocks/'));
});

gulp.task('karma-watch', function (done) {
  console.log(karmaConf);
  karmaConf.singleRun = false;
  karma.start(karmaConf, done);
});

gulp.task('watch', ['build'], function () {
  gulp.watch(['src/**/*.js', 'test/**/*.js'], ['build']);
});


gulp.task('run-demo', ['watch'], shell.task([
  'cd demo &&  ionic run ios -l -c --target="iPhone (Retina 4-inch)"'
]));
