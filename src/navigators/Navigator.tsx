import React from "react";
import {} from "@react-navigation/native-stack";
import Login from "../screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Otp from "../screens/Otp";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OTP" component={Otp} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default Navigator;
