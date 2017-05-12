var webpackConfig = require('./webpack.common');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      '../src/app/**/*.spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
      '../src/app/**/*.spec.js': ['webpack']
    },
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    },
    reporters: ['verbose'],
    browsers: ['PhantomJS'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity
  })
}