import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  ArrowForwardIcon,
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React from "react";

function Welcome({
  navigation,
}: {
  navigation: NativeStackNavigationProp<any>;
}) {
  return (
    <Box flex="1" bg="darkBlue.500">
      <VStack alignItems="center" mt="48">
        <Image
          source={require("../../assets/taxi.png")}
          alt="logo"
          width="700"
          h="200"
        />
        <Text fontSize="4xl" fontWeight="extrabold" color="white">
          MY TAXI
        </Text>
        <Text
          fontSize="2xl"
          // fontWeight="semibold"
          color="white"
          // textAlign="center"
        >
          MOVE SAFELY
        </Text>
      </VStack>
      <Box mt="auto" mb="10" alignItems="center">
        <Pressable
          bg="black"
          _pressed={{
            bg: "trueGray.800",
          }}
          flexDir="row"
          width="80%"
          p="3"
          alignItems="center"
          rounded="sm"
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            flex="1"
            textAlign="center"
            color="white"
            fontSize="lg"
            fontWeight="semibold"
          >
            Get started
          </Text>
          <ArrowForwardIcon color="white" position="absolute" right="2" />
        </Pressable>
      </Box>
    </Box>
  );
}

export default Welcome;
