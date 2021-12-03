import React from "react";
import {} from "@react-navigation/native-stack";
import Login from "../screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Otp from "../screens/Otp";
import Home from "../screens/Home";
import PickDrop from "../screens/PickDrop";
import ChooseTaxi from "../screens/ChooseTaxi";
import Welcome from "../screens/Welcome";
import EnRoute from "../screens/EnRoute";

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator
      initialRouteName="welcome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OTP" component={Otp} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="pickDrop" component={PickDrop} />
      <Stack.Screen name="chooseTaxi" component={ChooseTaxi} />
      <Stack.Screen name="enroute" component={EnRoute} />
    </Stack.Navigator>
  );
}

export default Navigator;
