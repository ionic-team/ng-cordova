var webpack = require('webpack');

module.exports = {
  entry: {
    'app': "./www/_app/app.js",
    'angular2': [
      // Angular 2 Deps
      'traceur-runtime',
      'zone.js',
      'reflect-metadata',
      'rtts_assert/rtts_assert',
      'angular2/angular2'
    ]
  },
  output: {
    path: __dirname,
    filename: "www/_app/app.bundle.js"
  },
  resolve: {
    modulesDirectories: [
      'lib/ionic',
      'node_modules'
    ],
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("angular2", "www/lib/bundle.js")
  ],
  watch: true // watch for changes after building
};
