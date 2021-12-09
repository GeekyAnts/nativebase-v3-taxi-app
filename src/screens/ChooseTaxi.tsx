import React, { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  ArrowBackIcon,
  Box,
  Button,
  ChevronRightIcon,
  Divider,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";
import MapViewDirections from "react-native-maps-directions";
import { Platform } from "react-native";
import WebChooseTaxi from "../components/WebChooseTaxi";

const initialVehicles = [
  {
    name: "Bike",
    timing: "5:58pm",
    amount: "28.00",
    oldAmount: "35.00",
    image: require("../../assets/Moto.png"),
  },
  {
    name: "Car",
    timing: "6:00pm",
    amount: "171.61",
    oldAmount: "214.51",
    image: require("../../assets/UberGo.png"),
  },
  {
    name: "TookTook",
    timing: "5:58pm",
    amount: "57.73",
    oldAmount: "72.16",
    image: require("../../assets/Auto.png"),
  },
];

const coordinates = [
  { latitude: 12.9698, longitude: 77.75 },
  { latitude: 12.9121, longitude: 77.6446 },
];

const GOOGLE_MAPS_API_KEY = "sduhbdsbfv-sdjdshvjhdfvb";

function ChooseTaxi({
  navigation,
}: {
  navigation: NativeStackNavigationProp<any>;
}) {
  const [vehicles, setVehicles] = useState(initialVehicles);
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0].name);

  return (
    <Box bg="white" flex="1" safeArea pb="2">
      <Pressable
        onPress={() => navigation.navigate("pickDrop")}
        position="absolute"
        top="16"
        left="1"
        zIndex="1"
      >
        <ArrowBackIcon size="8" color="black" />
      </Pressable>
      {/* <ScrollView> */}
      <Box h="40%" overflow="hidden" shadow="5">
        <ResponsiveMap />
      </Box>
      <HStack justifyContent="center" mt="6" mb="2">
        <Text fontWeight="normal">20% promotion applied</Text>
      </HStack>
      <ScrollView h="100">
        <VStack>
          {vehicles.map((vehicle, idx) => {
            return (
              <Pressable
                onPress={() => setSelectedVehicle(vehicle.name)}
                key={idx}
              >
                <HStack
                  bg={
                    selectedVehicle === vehicle.name ? "warmGray.200" : "white"
                  }
                  p="2"
                  pr="4"
                  space="4"
                  alignItems="center"
                >
                  <Image
                    source={vehicle.image}
                    width="70"
                    height="70"
                    alt={vehicle.name}
                  />
                  <VStack>
                    <Text fontSize="md" fontWeight="bold">
                      {vehicle.name}
                    </Text>
                    <Text fontWeight="300">{vehicle.timing}</Text>
                    {vehicle.name === "Bike" ? (
                      <Text color="darkBlue.500">Good value</Text>
                    ) : (
                      <></>
                    )}
                  </VStack>
                  {/* tilted pencil icon with  ml="auto" */}
                  <VStack ml="auto">
                    <Text fontSize="md" fontWeight="bold">
                      ₹ {vehicle.amount}
                    </Text>
                    <Text
                      ml="2"
                      color="gray.500"
                      fontWeight="semibold"
                      strikeThrough
                    >
                      ₹ {vehicle.oldAmount}
                    </Text>
                  </VStack>
                </HStack>
              </Pressable>
            );
          })}
        </VStack>
      </ScrollView>
      <Divider mt="0" />
      <HStack p="4" alignItems="center" space="4">
        {/* card image */}
        {/* <FontAwesome name="credit-card" size={24} color="black" />*/}
        <Text fontSize="md">Cash</Text>

        <ChevronRightIcon size="sm" ml="auto" />
      </HStack>
      <Button
        bg="black"
        mx="4"
        onPress={() => navigation.navigate("enroute")}
        _pressed={{ bg: "gray.700" }}
      >
        <Text color="white" fontSize="lg">
          Confirm {selectedVehicle}
        </Text>
      </Button>
      {/* </ScrollView> */}
    </Box>
  );
}

export default ChooseTaxi;

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
        //  latitude: 12.91072,
        //   longitude: 77.60173,
      }}
    >
      <Marker
        coordinate={{
          latitude: 22.7092,
          longitude: 75.854,
          // latitude: 12.91072,
          // longitude: 77.60173,
        }}
      >
        <Callout>
          <Text>I am here</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{
          // latitude: 22.7202,
          // longitude: 75.8615,
          latitude: 12.90596,
          longitude: 77.60145,
        }}
      ></Marker>
      <MapViewDirections
        // lineDashPattern={[0]}
        origin={coordinates[0]}
        destination={coordinates[1]}
        apikey={GOOGLE_MAPS_API_KEY}
        strokeWidth={3}
        strokeColor="hotpink"
      />
    </MapView>
  ),
  default: () => <WebChooseTaxi />,
});
