import React, { useState } from "react";
import {
  Actionsheet,
  Badge,
  Box,
  Button,
  ChevronDownIcon,
  ChevronRightIcon,
  Circle,
  Divider,
  HamburgerIcon,
  Heading,
  HStack,
  IconButton,
  Image,
  Pressable,
  ScrollView,
  Slide,
  Text,
  useBreakpointValue,
  useDisclose,
  VStack,
} from "native-base";

import { AntDesign, FontAwesome, Ionicons, Feather } from "@expo/vector-icons";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Sidebar from "../components/Sidebar";
import { Platform, useWindowDimensions } from "react-native";
import WebAroundYou from "../components/WebAroundYou";

const UberGo = require("../../assets/UberGo.png");
const UberPremier = require("../../assets/Uber_premier.png");
const Moto = require("../../assets/Moto.png");

function Home({ navigation }: { navigation: NativeStackNavigationProp<any> }) {
  const { isOpen, onOpen, onClose } = useDisclose();
  const [isSlideOpen, setSlideOpen] = useState(false);
  const { height, width } = useWindowDimensions();
  const isLargeScreen = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box
      flex="1"
      safeAreaTop
      flexDir="row"
      bg={{ base: "white", lg: "trueGray.100" }}
      justifyContent="center"
    >
      {isLargeScreen ? (
        <Box w="300" bg="white">
          <Sidebar navigation={navigation} />
        </Box>
      ) : (
        <></>
      )}

      <Box
        maxW="768"
        w="100%"
        // alignSelf="center"
        bg="white"
        h="100%"
      >
        <Pressable onPress={() => setSlideOpen(false)}>
          <ScrollView>
            <VStack space="4" p="4">
              <HStack>
                <Pressable
                  onPress={() => setSlideOpen(!isSlideOpen)}
                  display={{ base: "flex", lg: "none" }}
                >
                  <HamburgerIcon />
                </Pressable>
              </HStack>
              <HStack
                bg="slateGreen.100"
                rounded="xl"
                p="4"
                alignItems="center"
                // justifyContent="space-between"
              >
                <Text
                  color="light.300"
                  fontSize="lg"
                  fontWeight="semibold"
                  w="50%"
                >
                  20% off on first 5 rides
                </Text>
                <Box ml="auto">
                  <Ionicons name="pricetag" size={68} color="lightgreen" />
                </Box>
              </HStack>
              <HStack mt="2" space="3">
                <VStack flex="1" position="relative" space="2">
                  <Box bg="trueGray.200" alignItems="center" rounded="lg">
                    <Image
                      source={UberGo}
                      alt="Alternate Text"
                      // size="md"
                      width="20"
                      height="20"
                    />
                  </Box>
                  <Text fontWeight="semibold" fontSize="md" textAlign="center">
                    Rentals
                  </Text>
                </VStack>
                <VStack flex="1" space="2">
                  <Box bg="trueGray.200" alignItems="center" rounded="lg">
                    <Image
                      source={UberPremier}
                      alt="Alternate Text"
                      // size="md"
                      width="20"
                      height="20"
                    />
                  </Box>
                  <Text fontWeight="semibold" fontSize="md" textAlign="center">
                    Intercity
                  </Text>
                </VStack>
                <VStack flex="1" space="2">
                  <Box bg="trueGray.200" alignItems="center" rounded="lg">
                    <Image
                      source={Moto}
                      alt="Alternate Text"
                      // size="md"
                      width="20"
                      height="20"
                    />
                    {/* <Feather name="Moto" size={60} color="black" /> */}
                  </Box>
                  <Text fontWeight="semibold" fontSize="md" textAlign="center">
                    Moped
                  </Text>
                </VStack>
              </HStack>
              <HStack bg="trueGray.200" p="2" alignItems="center">
                <Pressable
                  onPress={() => navigation.navigate("pickDrop")}
                  flex="1"
                  _web={{ cursor: "pointer" }}
                >
                  <Text fontSize="xl" pl="2" fontWeight="600">
                    Where to?
                  </Text>
                </Pressable>
                <Divider
                  thickness="2"
                  bg="trueGray.300"
                  orientation="vertical"
                  mr="2"
                />
                <Button
                  startIcon={
                    <AntDesign name="clockcircle" size={20} color="black" />
                  }
                  endIcon={<ChevronDownIcon size="4" color="black" />}
                  _text={{ color: "black" }}
                  bg="white"
                  rounded="full"
                  onPress={onOpen}
                  _pressed={{
                    bg: "trueGray.200",
                  }}
                  variant="unstyled"
                  mx="2"
                >
                  Now
                </Button>
                <Actionsheet isOpen={isOpen} onClose={onClose}>
                  <Actionsheet.Content>
                    <Box w="100%" px={4} alignItems="center">
                      <Heading p="4" fontWeight="normal">
                        Schedule a Ride
                      </Heading>
                    </Box>
                    <Divider thickness="2" />
                    <Actionsheet.Item justifyContent="center">
                      Wed,1 Dec
                    </Actionsheet.Item>
                    <Divider />
                    <Actionsheet.Item justifyContent="center">
                      11:05am - 11:15 am
                    </Actionsheet.Item>
                    <Divider />
                    <Box w="100%" px={4} mt="5">
                      <Button
                        // colorScheme="black"
                        // variant="unstyled"
                        bg="muted.800"
                        _pressed={{ bg: "muted.900" }}
                        _text={{
                          fontSize: "md",
                          fontWeight: "semibold",
                        }}
                      >
                        Set pickup time
                      </Button>
                    </Box>
                  </Actionsheet.Content>
                </Actionsheet>
              </HStack>
              <HStack mt="4" space="2" alignItems="center">
                <Circle bg="trueGray.200" p="2" mr="3">
                  <FontAwesome name="star" size={18} color="black" />
                </Circle>
                <Pressable flexDir="row" flex="1" alignItems="center">
                  <Text fontWeight="semibold" fontSize="lg">
                    Choose a saved place
                  </Text>
                  <ChevronRightIcon ml="auto" size="sm" color="gray.400" />
                </Pressable>
              </HStack>
              <Heading my="4" size="md" fontWeight="semibold">
                Around you
              </Heading>
              <Box
                h={{ base: "200", md: "400" }}
                flex="1"
                w="100%"
                rounded="lg"
                overflow="hidden"
              >
                <ResponsiveMap />
              </Box>
            </VStack>
          </ScrollView>
        </Pressable>
        {isLargeScreen ? (
          <></>
        ) : (
          <Slide in={isSlideOpen} placement="left" w={width} h="100">
            <HStack w="100%" h="100%">
              <Box w={{ base: "80%", lg: "25%" }} bg="white">
                <Sidebar navigation={navigation} />
              </Box>
              <Pressable
                w={{ base: "20%", lg: "75%" }}
                onPress={() => setSlideOpen(false)}
                opacity="0.5"
                bg="black"
              ></Pressable>
            </HStack>
          </Slide>
        )}
      </Box>
    </Box>
  );
}

const ResponsiveMap = Platform.select({
  native: () => (
    <MapView
      style={{
        flex: 1,
      }}
      provider={PROVIDER_GOOGLE}
      region={{
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
        latitude: 12.9698,
        longitude: 77.75,
      }}
    ></MapView>
  ),
  default: () => <WebAroundYou />,
});

export default Home;
