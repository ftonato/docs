const withNextra = require('nextra')('nextra-theme-docs', './theme.config.js');
const withImages = require('next-images');
module.exports = {
  distDir: 'build',
  target: 'serverless',
  ...withImages(),
  ...withNextra(),
};
