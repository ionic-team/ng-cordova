var fs = require('fs');
var pkg = require('../package.json');

module.exports = {
  banner: '/*!\n' +
    ' * ngCordova\n' +
    ' * v' + pkg.version +'\n' +
    ' * Copyright 2014 Drifty Co. http://drifty.com/\n' +
    ' * See LICENSE in this repository for license information\n' +
    ' */\n',

  closureStart: '(function(){\n',
  closureEnd: '\n})();',

  dist: 'dist',
  pluginFiles: [
    'src/module.js',
    'src/plugins/*.js'
  ],

  mockFiles: [
    'src/module-mocks.js',
    'src/mocks/*.js'
  ],

  versionData: {
    version: pkg.version
  }
};
