module.exports = function(config) {
  config.set({
    browsers: ['Chrome', 'Firefox'],
    frameworks: ['jasmine'],
    files: [
      'src/**/*.js',
      'test/**/*.spec.js'
    ]
  });
};
