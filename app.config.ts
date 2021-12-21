import "dotenv/config";

export default {
  expo: {
    name: "Taxi-app",
    slug: "taxi-app-native-base",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },

    description:
      "A cross platform UI template to build a Taxi Booking App that provides all the necessary screens made in React Native along with NativeBase and React Navigation.\n",
    extra: {
      MAP_API: process.env.MAP_API ?? "",
    },
  },
};
