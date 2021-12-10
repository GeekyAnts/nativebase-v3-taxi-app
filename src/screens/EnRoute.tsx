import React, { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Modal,
  Pressable,
  Text,
  VStack,
} from "native-base";
import MapView, {
  Marker,
  Circle as MapCircle,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import WebEnRoute from "../components/WebEnRoute";

const coordinates = [
  { latitude: 12.9698, longitude: 77.75 },
  { latitude: 12.9121, longitude: 77.6446 },
];
const GOOGLE_MAPS_API_KEY = "AIzaSyBkySSVv9v6296KjPic-3F8YzIp9Mv7QQE";

function EnRoute({
  navigation,
}: {
  navigation: NativeStackNavigationProp<any>;
}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <Box bg="white" flex="1" safeArea>
      <Box borderColor="warmGray.300" p="2">
        <Text fontSize="lg">Driver confirmed and en route</Text>
      </Box>
      <Box flex="1" position="relative" shadow="5">
        <ResponsiveMap />
      </Box>
      <Box alignItems="center">
        <VStack my="2" p="4" space="4" maxW="768" w="100%">
          <Box width="100%">
            <HStack justifyContent="space-between">
              <Text fontSize="md">Driver's name</Text>
              <Rating number={4} />
            </HStack>
          </Box>
          <Text>Arriving in 5 min</Text>
          <HStack space="2">
            <Button
              bg="black"
              flex="1"
              _pressed={{ bg: "gray.700" }}
              borderRadius="0"
            >
              Contact
            </Button>
            <Button
              variant="outline"
              // bg="black"
              colorScheme="gray"
              // _pressed={{ bg: "gray.200" }}
              flex="1"
              onPress={() => setShowModal(true)}
              borderRadius="0"
            >
              Cancel
            </Button>
          </HStack>
        </VStack>
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
              // bg="black"
              // _pressed={{ bg: "gray.700" }}
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
              //   colorScheme="red"
              // bg="danger.600"
              // _pressed={{ bg: "danger.700" }}
              bg="black"
              _pressed={{ bg: "gray.700" }}
              flex="1"
              onPress={() => {
                navigation.navigate("chooseTaxi");
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

const Rating = ({ number }: { number: Number }) => {
  return (
    <HStack alignItems="center">
      <Text fontSize="md" mr="2">
        Rating
      </Text>
      {Array.apply(0, new Array(number)).map(function (x, i) {
        return <FontAwesome name="star" size={18} color="black" />;
      })}
    </HStack>
  );
};

const ResponsiveMap = Platform.select({
  native: () => (
    <MapView
      style={{
        flex: 1,
        //   height: "70%",
      }}
      provider={PROVIDER_GOOGLE}
      region={{
        latitudeDelta: 0.015,
        longitudeDelta: 0.00121,
        latitude: 12.9698,
        longitude: 77.75,
      }}
    >
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
    </MapView>
  ),
  default: () => <WebEnRoute />,
});

export default EnRoute;
