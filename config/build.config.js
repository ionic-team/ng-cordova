var fs = require('fs');
var pkg = require('../package.json');

module.exports = {
  banner:
    '/*!\n' +
    ' * ngCordova\n' +
    ' * Copyright 2014 Drifty Co. http://drifty.com/\n' +
    ' * See LICENSE in this repository for license information\n' +
    ' */\n',
  closureStart: '(function(){\n',
  closureEnd: '\n})();',

  dist: 'dist',

  jsFiles: ['src/**/*.js'],

  versionData: {
    version: pkg.version
  }
};
