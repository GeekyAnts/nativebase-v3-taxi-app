module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          alias: {
            "@native-base/icons": "@native-base/icons/lib",
          },
        },
      ],
    ],
  };
};
