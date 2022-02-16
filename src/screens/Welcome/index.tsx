import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  ArrowForwardIcon,
  Box,
  Image,
  Pressable,
  Text,
  useBreakpointValue,
  VStack,
} from "native-base";
import React from "react";
import Header from "./Header";
const logo = require("../../../assets/taxi.png");
const webLogo = require("../../../assets/logo-web.jpg");

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
    <Box flex="1" bg={{ base: "darkBlue.500", lg: "muted.900" }}>
      {isLargeScreen ? <Header navigation={navigation} /> : <></>}

      <VStack alignItems="center" flex="1" justifyContent="center">
        {isLargeScreen ? (
          <Image
            source={webLogo}
            w="100%"
            h="100%"
            opacity="0.2"
            position="absolute"
          />
        ) : (
          <></>
        )}

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
        <Text fontSize={{ base: "lg", lg: "3xl" }} color="white">
          MOVE SAFELY
        </Text>
      </VStack>
      {isLargeScreen ? (
        <></>
      ) : (
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
      )}
    </Box>
  );
}

export default Welcome;
