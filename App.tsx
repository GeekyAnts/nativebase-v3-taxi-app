import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/navigators/Navigator";
import { TaxiTheme } from "./src/theme";

// Define the config
// const config = {
//   useSystemColorMode: false,
//   initialColorMode: "dark",
// };

// extend the theme
// export const theme = extendTheme({ config });

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
