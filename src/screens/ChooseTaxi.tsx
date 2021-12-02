import React, { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
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

const GOOGLE_MAPS_API_KEY = "AIzaSyBkySSVv9v6296KjPic-3F8YzIp9Mv7QQE";

function ChooseTaxi({
  navigation,
}: {
  navigation: NativeStackNavigationProp<any>;
}) {
  const [vehicles, setVehicles] = useState(initialVehicles);
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0].name);
  return (
    <Box bg="white" flex="1">
      {/* <ScrollView> */}
      <Box h="40%" overflow="hidden">
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
        >
          <Marker
            coordinate={{
              latitude: 22.7092,
              longitude: 75.854,
            }}
          >
            <Callout>
              <Text>I am here</Text>
            </Callout>
          </Marker>
          <Marker
            coordinate={{
              latitude: 22.7202,
              longitude: 75.8615,
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
        {/* Draggable */}
      </Box>
      <HStack justifyContent="center" mt="6" mb="2">
        <Text fontWeight="semibold">20% promotion applied</Text>
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
                    <Text fontWeight="bold">{vehicle.name}</Text>
                    <Text>{vehicle.timing}</Text>
                    {vehicle.name === "Moto" ? (
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
        <FontAwesome name="credit-card" size={24} color="black" />
        <Text fontSize="md" fontWeight="bold">
          Add payment method
        </Text>
        <ChevronRightIcon size="sm" ml="auto" />
      </HStack>
      <Button bg="black" mx="4">
        <Text color="white" fontSize="lg">
          Confirm {selectedVehicle}
        </Text>
      </Button>
      {/* </ScrollView> */}
    </Box>
  );
}

export default ChooseTaxi;
