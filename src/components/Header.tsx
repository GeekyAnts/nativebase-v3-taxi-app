import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Box, Button, HStack } from "native-base";
import React from "react";

function Header({
  navigation,
}: {
  navigation: NativeStackNavigationProp<any>;
}) {
  return (
    <HStack bg="black" p="4" zIndex="2">
      {/* <Box ml="auto">Login</Box> */}
      <Button
        ml="auto"
        onPress={() => navigation.navigate("Login")}
        // colorScheme="white"
        bg="white"
        // borderRadius="0"
        rounded="full"
        px="5"
      >
        Login
      </Button>
    </HStack>
  );
}

export default Header;
