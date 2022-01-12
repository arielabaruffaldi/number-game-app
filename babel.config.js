module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@atoms': './src/components/atoms',
          '@molecules': './src/components/molecules',
          '@organism': './src/components/organism',
          '@screens': './src/screens',
          '@theme': './src/theme',
        },
      },
    ],
  ],
};
