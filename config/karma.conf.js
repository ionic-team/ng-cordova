var buildConfig = require('./build.config.js');

module.exports = {
  files: [
    // Include jQuery only for testing convience (lots of DOM checking for unit tests on directives)
    'http://codeorigin.jquery.com/jquery-1.10.2.min.js',
    'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min.js',
    'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-mocks.js'
  ]
    .concat(buildConfig.jsFiles)
    .concat('test/**/*.js'),

  frameworks: ['jasmine'],
  reporters: ['progress'],
  port: 9876,
  colors: true,
  // possible values: 'OFF', 'ERROR', 'WARN', 'INFO', 'DEBUG'
  logLevel: 'INFO',
  autoWatch: true,
  captureTimeout: 60000,
  singleRun: false,

  // Start these browsers, currently available:
  // - Chrome
  // - ChromeCanary
  // - Firefox
  // - Opera (has to be installed with `npm install karma-opera-launcher`)
  // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
  // - PhantomJS
  // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
  browsers: ['Chrome']
};

