import {
  ArrowBackIcon,
  Box,
  Button,
  Center,
  ChevronDownIcon,
  HStack,
  IconButton,
  Input,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React, { useState } from "react";
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  Circle as MapCircle,
} from "react-native-maps";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import WebPickDrop from "../components/WebPickDrop";

const CirclePoint = () => {
  return (
    <>
      <Box w="2" h="2" bg="gray.400" rounded="full" />
      <Box w="0.5" h="8" bg="gray.400" />
    </>
  );
};

const InputPoint = () => {
  return (
    <Input
      _focus={{
        bg: "muted.200",
      }}
      variant="unstyled"
      placeholder="Enter stop"
    />
  );
};

function PickDrop({
  navigation,
}: {
  navigation: NativeStackNavigationProp<any>;
}) {
  const [dropPoints, setDropPoints] = useState(1);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [pin, setPin] = useState({
    latitude: 12.9698,
    longitude: 77.75,
  });

  return (
    <Box bg="white" flex="1" safeAreaTop>
      <Box p="4">
        <HStack alignItems="center">
          <Pressable onPress={() => navigation.navigate("home")}>
            <ArrowBackIcon size="8" color="black" />
          </Pressable>
          <HStack alignItems="center" space="2" mx="auto">
            <MaterialCommunityIcons
              name="account-circle"
              size={24}
              color="gray"
            />
            <Text>For Me</Text>
            <ChevronDownIcon size="sm" />
          </HStack>
        </HStack>
        <HStack space="2" mt="4">
          <VStack alignItems="center" my="auto">
            {/* line */}

            {Array.apply(0, Array(dropPoints)).map(function (x, i) {
              return <CirclePoint key={i} />;
            })}

            <Box w="2" h="2" bg="black" />
          </VStack>
          <VStack space="2" flex="1">
            <Input
              isRequired
              variant="unstyled"
              placeholder="From?"
              bg="muted.100"
              _focus={{
                bg: "muted.200",
              }}
              value={origin}
              onChange={(event: any) => setOrigin(event.target.value)}
            />
            <Input
              variant="unstyled"
              bg="muted.100"
              placeholder={dropPoints === 1 ? "Where to?" : ""}
              _focus={{
                bg: "muted.200",
              }}
              value={destination}
              onChange={(event: any) => setDestination(event.target.value)}
            />
            {Array.apply(0, Array(dropPoints - 1)).map(function (x, i) {
              return <InputPoint key={i} />;
            })}
          </VStack>
          <VStack>
            <IconButton
              icon={<Entypo name="plus" size={24} color="black" />}
              mt="auto"
              onPress={() => setDropPoints(dropPoints + 1)}
            ></IconButton>
          </VStack>
        </HStack>
      </Box>

      <Box flex="1" position="relative" shadow="5">
        <ResponsiveMap />

        <Button
          onPress={() => navigation.navigate("chooseTaxi")}
          bg="black"
          _pressed={{ bg: "gray.800" }}
          position="absolute"
          bottom="10"
          left="5%"
          right="5%"
          display={origin == "" || destination == "" ? "none" : "flex"}
          _text={{ fontSize: "md" }}
          py="3"
        >
          Done
        </Button>
      </Box>
    </Box>
  );
}

const ResponsiveMap = Platform.select({
  native: () => {
    const [pin, setPin] = useState({
      latitude: 12.9698,
      longitude: 77.75,
    });
    return (
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
          coordinate={pin}
          pinColor="black"
          draggable={true}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
        ></Marker>
        <MapCircle center={pin} radius={50}></MapCircle>
        <Marker
          coordinate={{
            latitude: 12.9121,
            longitude: 77.6446,
          }}
        ></Marker>
      </MapView>
    );
  },
  default: () => {
    return (
      <Box w="100%">
        <WebPickDrop />
      </Box>
    );
  },
});

export default PickDrop;
