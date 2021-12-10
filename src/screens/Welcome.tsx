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
  useBreakpointValue,
  VStack,
} from "native-base";
import React from "react";
import Header from "../components/Header";
const logo = require("../../assets/taxi.png");

function Welcome({
  navigation,
}: {
  navigation: NativeStackNavigationProp<any>;
}) {
  const isLargeScreen = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box flex="1" bg="darkBlue.500">
      {isLargeScreen ? <Header navigation={navigation} /> : <></>}

      <VStack alignItems="center" flex="1" justifyContent="center">
        <Image
          source={logo}
          alt="logo"
          width={{ base: "155", lg: "250" }}
          h={{ base: "62", lg: "100" }}
        />
        <Text
          fontSize={{ base: "3xl", lg: "5xl" }}
          fontWeight="700"
          color="white"
          mt={{ base: "0", lg: "6" }}
        >
          MY TAXI
        </Text>
        <Text
          fontSize={{ base: "lg", lg: "3xl" }}
          // fontWeight="semibold"
          color="white"
          // textAlign="center"
        >
          MOVE SAFELY
        </Text>
      </VStack>
      <Box mb="10" alignItems="center">
        <Pressable
          bg="black"
          _pressed={{
            bg: "trueGray.800",
          }}
          flexDir="row"
          width="90%"
          p="3"
          alignItems="center"
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
