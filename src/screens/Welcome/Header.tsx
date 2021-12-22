import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, HStack } from "native-base";
import React from "react";

function Header({
  navigation,
}: {
  navigation: NativeStackNavigationProp<any>;
}) {
  return (
    <HStack bg="black" p="4" zIndex="2">
      <Button
        ml="auto"
        onPress={() => navigation.navigate("Login")}
        bg="white"
        colorScheme="dark"
        rounded="full"
        px="5"
      >
        Login
      </Button>
    </HStack>
  );
}

export default Header;
