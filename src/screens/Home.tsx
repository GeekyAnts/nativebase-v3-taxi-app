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
  Slide,
  Text,
  useDisclose,
  VStack,
} from "native-base";

import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import UberGo from "../../assets/UberGo.png";
import UberPremier from "../../assets/Uber_premier.png";
import Sidebar from "../components/Sidebar";

function Home({ navigation }: { navigation: NativeStackNavigationProp<any> }) {
  const { isOpen, onOpen, onClose } = useDisclose();
  const [isSlideOpen, setSlideOpen] = useState(false);

  return (
    <Box
      // p="4" space="4"
      bg="white"
      flex="1"
      safeAreaTop
    >
      <Slide
        in={isSlideOpen}
        placement="left"
        zIndex="990"
        // mt="16"
        bg="white"
        minW="300"
        height="100%"
        duration={300}
        // position="absolute"
        // top="0"
        // bottom="-10"
        // flex="1"
      >
        <Sidebar navigation={navigation} />
      </Slide>

      <Pressable onPress={() => setSlideOpen(false)} zIndex="-1">
        <VStack
          space="4"
          p="4"
          // opacity={isSlideOpen ? 0.1 : 1}
        >
          <HStack>
            <Pressable onPress={() => setSlideOpen(!isSlideOpen)}>
              <HamburgerIcon />
            </Pressable>
          </HStack>
          <HStack
            bg="slateGreen.100"
            rounded="lg"
            p="4"
            alignItems="center"
            // justifyContent="space-between"
          >
            <Text color="light.300" fontSize="lg" fontWeight="semibold" w="50%">
              20% off on first 5 rides
            </Text>
            <Box ml="auto">
              <Ionicons name="pricetag" size={68} color="lightgreen" />
            </Box>
          </HStack>
          <HStack space="6" mt="2">
            <Box
              flex="1"
              bg="trueGray.200"
              rounded="lg"
              // h="100"
              p="2"
              position="relative"
            >
              <Badge
                rounded="full"
                bg="green.600"
                _text={{ color: "white", fontSize: "sm" }}
                mx="auto"
                position="absolute"
                top="-10"
                left="30%"
                right="30%"
              >
                20% off
              </Badge>
              <Image
                source={UberGo}
                alt="Alternate Text"
                // size="md"
                width="20"
                height="20"
                ml="auto"
              />
              <Text fontWeight="semibold" fontSize="md" mt="auto">
                Rentals
              </Text>
            </Box>
            <Box
              flex="1"
              bg="trueGray.200"
              rounded="lg"
              p="2"
              // h="100"
            >
              <Image
                source={UberPremier}
                alt="Alternate Text"
                // size="md"
                width="20"
                height="20"
                ml="auto"
              />
              <Text fontWeight="semibold" fontSize="md" mt="auto">
                Intercity
              </Text>
            </Box>
          </HStack>
          <HStack bg="trueGray.200" p="2" alignItems="center">
            <Pressable onPress={() => navigation.navigate("pickup")} flex="1">
              <Text fontWeight="semibold" fontSize="xl">
                Where to?
              </Text>
            </Pressable>
            <Divider
              thickness="2"
              bg="trueGray.300"
              orientation="vertical"
              // ml="auto"
              mr="4"
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
            >
              Now
            </Button>
            <Actionsheet isOpen={isOpen} onClose={onClose}>
              <Actionsheet.Content>
                <Box w="100%" px={4} alignItems="center">
                  <Heading p="4">Schedule a Ride</Heading>
                </Box>
                <Divider thickness="2" />
                <Actionsheet.Item justifyContent="center">
                  Wed,1 Dec
                </Actionsheet.Item>
                <Divider />
                <Actionsheet.Item justifyContent="center">
                  11:05am - 11:15 am
                </Actionsheet.Item>
                <Box w="100%" px={4}>
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
          <Heading my="4" size="md">
            Around you
          </Heading>
          <Box h="200" rounded="lg" overflow="hidden">
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
          </Box>
        </VStack>
      </Pressable>
    </Box>
  );
}

export default Home;
