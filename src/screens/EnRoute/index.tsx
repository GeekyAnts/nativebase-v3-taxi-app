import React, { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Image,
  Modal,
  Pressable,
  Text,
  useBreakpointValue,
  VStack,
} from "native-base";
import { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { FontAwesome, Ionicons } from "@native-base/icons";
import { Platform } from "react-native";
import WebMap from "./WebMap";
import Constants from "expo-constants";
import NativeMap from "../../components/NativeMap";

const coordinates = [
  { latitude: 12.9698, longitude: 77.75 },
  { latitude: 12.9121, longitude: 77.6446 },
];
const GOOGLE_MAPS_API_KEY = Constants?.manifest?.extra?.MAP_API;
const driverImage = require("../../../assets/driver.png");

function EnRoute({
  navigation,
}: {
  navigation: NativeStackNavigationProp<any>;
}) {
  const [showModal, setShowModal] = useState(false);
  const isLargeScreen = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box bg="white" flex="1" safeArea>
      {isLargeScreen ? (
        <></>
      ) : (
        <Box zIndex="10">
          <Box p="2" bg="white" shadow="2">
            <Text fontSize="lg">Driver confirmed and en route</Text>
          </Box>
        </Box>
      )}

      <Box flex="1" flexDir={{ base: "column", lg: "row-reverse" }}>
        <Box flex="1" position="relative">
          <ResponsiveMap />
        </Box>

        <Box
          alignItems="center"
          alignSelf={{ base: "center", lg: "flex-start" }}
          maxW="600"
          w="100%"
        >
          {isLargeScreen ? (
            <>
              <Box borderColor="warmGray.300" p="2">
                <Text fontSize="lg">Driver confirmed and en route</Text>
              </Box>
              <Divider thickness="2" />
            </>
          ) : (
            <></>
          )}
          <VStack my="2" p="4" space="4" width="100%">
            <Box>
              <HStack alignItems="flex-start" space="5">
                <Image
                  source={driverImage}
                  alt="driver image"
                  size="12"
                  rounded="full"
                />
                <VStack mr="auto">
                  <HStack alignItems="center" space="1">
                    <Text fontSize="lg" fontWeight="semibold" mr="1" maxW="150">
                      Driver's name
                    </Text>
                    <Text fontSize="md" fontWeight="semibold">
                      4.8
                    </Text>
                    <FontAwesome name="star" size={14} color="black" />
                  </HStack>
                  <Text fontSize="md" color="warmGray.600">
                    Vehicle's name
                  </Text>
                </VStack>
                <Box bg="trueGray.200" p="2" rounded="xs">
                  5JFDKLS
                </Box>
              </HStack>
            </Box>
            <Text>
              Driver has confirmed your booking. Sit back & relax. Your cab is{" "}
              <Text fontWeight="600">arriving in 5 min.</Text>
            </Text>
            <HStack space="2">
              <Button
                variant="outline"
                colorScheme="gray"
                flex="1"
                onPress={() => setShowModal(true)}
                borderRadius="0"
                _text={{ fontSize: "lg" }}
                py={{ base: "2", lg: "3" }}
              >
                Cancel
              </Button>
              <Button
                bg="black"
                flex="1"
                _pressed={{ bg: "gray.700" }}
                colorScheme="gray"
                borderRadius="0"
                _text={{ fontSize: "lg" }}
                py={{ base: "0", lg: "3" }}
              >
                Contact
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Box>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.Header>Cancel Ride</Modal.Header>
          <Modal.Body>
            <VStack divider={<Divider />} space="2">
              <Text color="gray.600">
                Are you sure, you want to cancel the ride?
              </Text>

              <HStack alignItems="center" space="1">
                <Icon
                  as={Ionicons}
                  name="location-outline"
                  color="gray.600"
                  size="sm"
                />
                <Text>Wrong pickup location?</Text>
                <Pressable ml="auto">
                  <Text color="blue.500" fontSize="xs">
                    EDIT PICKUP
                  </Text>
                </Pressable>
              </HStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              colorScheme="gray"
              variant="outline"
              flex="1"
              onPress={() => {
                setShowModal(false);
              }}
              mr="4"
              borderRadius="0"
            >
              NO
            </Button>
            <Button
              bg="black"
              colorScheme="gray"
              _pressed={{ bg: "gray.700" }}
              flex="1"
              onPress={() => {
                navigation.navigate("chooseTaxi");
                setShowModal(false);
              }}
              borderRadius="0"
            >
              YES, CANCEL
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Box>
  );
}

const ResponsiveMap = Platform.select({
  native: () => (
    <NativeMap>
      <Marker pinColor="black" coordinate={coordinates[0]}></Marker>
      <Marker coordinate={coordinates[1]}></Marker>
      <MapViewDirections
        lineDashPattern={[0]}
        origin={coordinates[0]}
        destination={coordinates[1]}
        apikey={GOOGLE_MAPS_API_KEY}
        strokeWidth={3}
        strokeColor="hotpink"
      />
    </NativeMap>
  ),
  default: () => <WebMap />,
});

export default EnRoute;
