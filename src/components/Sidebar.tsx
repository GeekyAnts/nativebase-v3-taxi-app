import React from "react";
import {
  Box,
  VStack,
  Pressable,
  Text,
  Divider,
  HStack,
  Avatar,
  ChevronRightIcon,
} from "native-base";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const options = [
  {
    label: "Your Trips",
  },
  {
    label: "Help",
  },
  {
    label: "Wallet",
  },
  {
    label: "Send a Gift",
  },
  {
    label: "Settings",
  },
];

const Drawer = createDrawerNavigator();
function Sidebar({
  navigation,
}: {
  navigation: NativeStackNavigationProp<any>;
}) {
  return (
    <Box flex="1" bg="white">
      <VStack
        bg="black"
        space="4"
        pt="16"
        divider={<Divider thickness="0.2" />}
      >
        <HStack alignItems="center" space="3" px="4">
          <Avatar bg="gray.300">GG</Avatar>
          <VStack>
            <Text fontSize="md" fontWeight="bold" color="white">
              Gaurav Guha
            </Text>
            <Text fontSize="xs" color="trueGray.400">
              5.00
            </Text>
          </VStack>
        </HStack>
        <Pressable
          px="4"
          pb="5"
          pt="1"
          flexDir="row"
          justifyContent="space-between"
        >
          <Text color="warmGray.100" fontSize="md">
            Messages
          </Text>
          <ChevronRightIcon size="sm" color="white" />
        </Pressable>
      </VStack>
      <VStack space="2" w="100%">
        {options.map((option, idx) => {
          return (
            <Pressable
              key={idx}
              p="4"
              _pressed={{
                bg: "coolGray.300",
              }}
              _hover={{
                bg: "coolGray.200",
              }}
            >
              <Text fontSize="md">{option.label}</Text>
            </Pressable>
          );
        })}
        <Pressable
          p="4"
          _pressed={{
            bg: "coolGray.300",
          }}
          _hover={{
            bg: "coolGray.200",
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text fontSize="md">Logout</Text>
        </Pressable>
      </VStack>
    </Box>
  );
}

export default Sidebar;
