import React, { useState } from "react";
import {
  Actionsheet,
  Box,
  Button,
  ChevronDownIcon,
  ChevronRightIcon,
  Circle,
  Divider,
  HamburgerIcon,
  Heading,
  HStack,
  Icon,
  Image,
  Modal,
  Pressable,
  ScrollView,
  Slide,
  Stack,
  Text,
  useBreakpointValue,
  useDisclose,
  VStack,
} from "native-base";

import { AntDesign, Ionicons, FontAwesome } from "@native-base/icons";
import { Circle as MapCircle } from "react-native-maps";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Sidebar from "./Sidebar";
import { Platform, useWindowDimensions } from "react-native";
import WebMap from "./WebMap";
import NativeMap from "../../components/NativeMap";

const UberGo = require("../../../assets/UberGo.png");
const UberPremier = require("../../../assets/Uber_premier.png");
const Moto = require("../../../assets/Moto.png");

function Home({ navigation }: { navigation: NativeStackNavigationProp<any> }) {
  const { isOpen, onOpen, onClose } = useDisclose();
  const [isSlideOpen, setSlideOpen] = useState(false);
  const { height, width } = useWindowDimensions();
  const [isSidebar, setSidebar] = useState(false);
  const isLargeScreen = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <ScrollView
      flex="1"
      nativeID="scrollview"
      _contentContainerStyle={{
        height: "100%",
      }}
    >
      <Box
        flex="1"
        bg={{ base: "white", lg: "trueGray.100" }}
        nativeID="parentView"
      >
        {isLargeScreen ? (
          <HStack p="4" zIndex="2" bg="black">
            <Pressable onPress={() => setSidebar(!isSidebar)}>
              <HamburgerIcon color="white" />
            </Pressable>
          </HStack>
        ) : (
          <></>
        )}
        <Box safeAreaTop flexDir="row" flex="1">
          {isLargeScreen ? (
            <Box w="300" bg="white" display={isSidebar ? "flex" : "none"}>
              <Sidebar navigation={navigation} />
            </Box>
          ) : (
            <></>
          )}

          <Stack direction={{ base: "column", lg: "row" }} flex="1" space="2">
            <VStack space="4" p="4" w="100%" maxW={{ lg: "600" }}>
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
                height="110"
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
                      alt="Uber Go image"
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
                      alt="Premier car image"
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
                      alt="Bike image"
                      width="20"
                      height="20"
                    />
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
                  onPress={() => {
                    onOpen();
                  }}
                  variant="unstyled"
                  mx="2"
                >
                  Now
                </Button>
                {isLargeScreen ? (
                  <Modal isOpen={isOpen} onClose={onClose} size="lg">
                    <Modal.Content maxWidth="400px">
                      <Modal.CloseButton top="18" />
                      <Modal.Header p="6">Schedule a Ride</Modal.Header>
                      <Modal.Body px="0">
                        <Pressable
                          _pressed={{
                            bg: "coolGray.300",
                          }}
                          _hover={{
                            bg: "coolGray.200",
                          }}
                          p="3"
                          px="6"
                        >
                          <Text>Wed,1 Dec</Text>
                        </Pressable>
                        <Divider my="1" />
                        <Pressable
                          _pressed={{
                            bg: "coolGray.300",
                          }}
                          _hover={{
                            bg: "coolGray.200",
                          }}
                          p="3"
                          px="6"
                        >
                          <Text>11:05am - 11:15 am</Text>
                        </Pressable>
                      </Modal.Body>
                      <Modal.Footer p="6">
                        <Button
                          w="100%"
                          colorScheme="muted"
                          bg="muted.800"
                          _pressed={{ bg: "muted.900" }}
                          _text={{
                            fontSize: "md",
                            fontWeight: "semibold",
                          }}
                          borderRadius="0"
                          onPress={onClose}
                          py="3"
                        >
                          Set pickup time
                        </Button>
                      </Modal.Footer>
                    </Modal.Content>
                  </Modal>
                ) : (
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
                )}
              </HStack>
              <HStack mt="4" space="2" alignItems="center">
                <Circle bg="trueGray.200" p="2" mr="3">
                  <Icon as={FontAwesome} name="star" size="xs" />
                </Circle>
                <Pressable flexDir="row" flex="1" alignItems="center">
                  <Text fontWeight="semibold" fontSize="lg">
                    Choose a saved place
                  </Text>
                  <ChevronRightIcon ml="auto" size="sm" color="gray.400" />
                </Pressable>
              </HStack>
            </VStack>
            <VStack space="4" p="4" flex="1" h={{ lg: "100%" }}>
              <Heading size="md" fontWeight="semibold">
                Around you
              </Heading>
              <Box flex="1" w="100%" rounded="lg" overflow="hidden" minH="240">
                <ResponsiveMap />
              </Box>
            </VStack>
          </Stack>
        </Box>
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
    </ScrollView>
  );
}

const ResponsiveMap = Platform.select({
  native: () => (
    <NativeMap>
      <MapCircle
        center={{ latitude: 12.9698, longitude: 77.75 }}
        radius={100}
      ></MapCircle>
    </NativeMap>
  ),
  default: () => <WebMap />,
});

export default Home;
