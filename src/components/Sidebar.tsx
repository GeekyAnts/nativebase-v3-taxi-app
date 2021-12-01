import React from "react";
import { Box } from "native-base";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";

const Drawer = createDrawerNavigator();
function Sidebar() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Yout Trips" component={Home} />
      <Drawer.Screen name="Help" component={Home} />
      <Drawer.Screen name="Wallet" component={Home} />
      <Drawer.Screen name="Send a Gift" component={Home} />
      <Drawer.Screen name="Settings" component={Home} />
    </Drawer.Navigator>
  );
}

export default Sidebar;
