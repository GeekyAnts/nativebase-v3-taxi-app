import React from "react";
import "react-native-gesture-handler";
import { NativeBaseProvider, Box, Text } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/navigators/Navigator";
import { TaxiTheme } from "./src/theme";
import Sidebar from "./src/components/Sidebar";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={TaxiTheme}>
        <Box safeArea flex={1}>
          <Navigator />
        </Box>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
