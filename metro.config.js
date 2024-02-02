const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/assets/fonts'],
  resolver: {
    assetExts: ['ttf', 'png', 'jpg', 'jpeg'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
