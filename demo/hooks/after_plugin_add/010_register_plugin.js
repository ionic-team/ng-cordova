#!/usr/bin/env node

/**
 * Push plugins to cordovaPlugins array after_plugin_add
 */
var fs = require('fs');
var packageJSON = require('../../package.json');

packageJSON.cordovaPlugins = packageJSON.cordovaPlugins || [];
process.env.CORDOVA_PLUGINS.split(',').forEach(function (plugin) {
  if(packageJSON.cordovaPlugins.indexOf(plugin) == -1) {
    packageJSON.cordovaPlugins.push(plugin);
  }
});

fs.writeFileSync('package.json', JSON.stringify(packageJSON, null, 2));
