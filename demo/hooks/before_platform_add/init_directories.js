#!/usr/bin/env node

/**
 * On a fresh clone, the local platforms/ and plugins/ directories will be
 * missing, so ensure they get created before the first platform is added.
 */
var fs = require('fs');
var path = require('path');

var platformsDir = path.resolve(__dirname, '../../platforms');
var pluginsDir = path.resolve(__dirname, '../../plugins');

try {
  fs.mkdirSync(platformsDir, function (err) {
    if (err) { console.error(err); }
  });
} catch(ex) {}

try {
  fs.mkdirSync(pluginsDir, function (err) {
    if (err) { console.error(err); }
  });
} catch(ex) {}
