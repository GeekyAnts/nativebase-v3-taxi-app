import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Box, Button, HStack } from "native-base";
import React from "react";

function Header({
  navigation,
}: {
  navigation: NativeStackNavigationProp<any>;
}) {
  return (
    <HStack bg="black" p="4">
      {/* <Box ml="auto">Login</Box> */}
      <Button>Login</Button>
    </HStack>
  );
}

export default Header;