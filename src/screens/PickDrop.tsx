import {
  ArrowBackIcon,
  Box,
  Button,
  Center,
  ChevronDownIcon,
  Circle,
  HStack,
  IconButton,
  Input,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React, { useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

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
    />
  );
};

function PickDrop({
  navigation,
}: {
  navigation: NativeStackNavigationProp<any>;
}) {
  const [dropPoints, setDropPoints] = useState(1);
  return (
    <Box bg="white" flex="1">
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
            <Text>For me</Text>
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
              placeholder="From?"
              _focus={{
                bg: "muted.200",
              }}
            />
            <Input
              placeholder={dropPoints === 1 ? "Where to?" : ""}
              _focus={{
                bg: "muted.200",
              }}
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

      <Box flex="1" position="relative">
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
        >
          <Marker
            coordinate={{
              latitude: 22.7092,
              longitude: 75.854,
            }}
          ></Marker>
          <Marker
            coordinate={{
              latitude: 22.7202,
              longitude: 75.8615,
            }}
          ></Marker>
        </MapView>
        <Button
          onPress={() => navigation.navigate("chooseTaxi")}
          bg="black"
          position="absolute"
          bottom="10"
          left="5%"
          right="5%"
        >
          Done
        </Button>
      </Box>
    </Box>
  );
}

export default PickDrop;
