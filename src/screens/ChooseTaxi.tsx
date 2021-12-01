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
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";

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
            latitude: 22.718435,
            longitude: 75.855217,
          }}
        ></MapView>
        {/* Draggable */}
      </Box>
      <HStack justifyContent="center" mt="6" mb="2">
        <Text>20% promotion applied</Text>
      </HStack>
      <VStack>
        {vehicles.map((vehicle, idx) => {
          return (
            <Pressable onPress={() => setSelectedVehicle(vehicle.name)}>
              <HStack
                bg={selectedVehicle === vehicle.name ? "warmGray.200" : "white"}
                p="2"
                space="4"
                alignItems="center"
              >
                <Image source={vehicle.image} width="70" height="70" />
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
