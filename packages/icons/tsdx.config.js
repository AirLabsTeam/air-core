const external = require('rollup-plugin-peer-deps-external');
const reactSvg = require('rollup-plugin-react-svg');
const svgo = require('./svgo.config.bundle.json');

module.exports = {
  // This function will run for each entry/format/env combination

  // rollup(config, options) {
  rollup(config) {
    config.plugins = [external(), reactSvg({ svgo }), ...config.plugins];

    return config;
  },
};
