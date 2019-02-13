module.exports = function(config) {
  config.set({
    browsers: ['Chrome', 'Firefox'],
    frameworks: ['mocha', 'chai'],
    files: [
      'src/**/*.js',
      'test/**/*.spec.js'
    ],
  });
};
