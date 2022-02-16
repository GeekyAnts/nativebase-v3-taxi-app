import {
  ArrowBackIcon,
  Box,
  Button,
  ChevronDownIcon,
  HStack,
  Icon,
  IconButton,
  Input,
  Pressable,
  Text,
  useBreakpointValue,
  VStack,
} from "native-base";
import React, { useState } from "react";
import {
  Marker,
  Circle as MapCircle,
} from "react-native-maps";
import { MaterialCommunityIcons, Entypo } from "@native-base/icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import WebMap from "./WebMap";
import NativeMap from "../../components/NativeMap";

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
      variant="unstyled"
      bg="muted.100"
      _focus={{
        bg: "muted.200",
      }}
      placeholder="Enter stop"
      maxH="35"
      fontSize="md"
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
  const isLargeScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      bg="white"
      flex="1"
      safeAreaTop
      flexDir={{ base: "column", lg: "row" }}
    >
      <Box maxWidth="600" w="100%" mx="auto">
        <Box p="4" justifyContent="center">
          <HStack space="2" alignItems="center" justifyContent="center">
            <Pressable
              onPress={() => navigation.navigate("home")}
              position="absolute"
              left="0"
            >
              <ArrowBackIcon size="7" color="black" />
            </Pressable>
            <Icon
              as={MaterialCommunityIcons}
              name="account-circle"
              size="8"
              color="gray.500"
            />
            <Text fontSize="md">For Me</Text>
            <ChevronDownIcon size="sm" />
          </HStack>
          {/* </HStack> */}
          <HStack space="2" mt="4">
            <VStack alignItems="center" my="auto" mx="2">
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
                onChange={(event: any) => {
                  setOrigin(event.target.value);
                }}
                fontSize="md"
                maxH="35"
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
                fontSize="md"
                maxH="35"
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
          {isLargeScreen ? (
            <HStack
              ml="8"
              mr="12"
              justifyContent="space-between"
              space="2"
              mt="6"
            >
              <Button
                onPress={() => navigation.navigate("chooseTaxi")}
                bg="black"
                _pressed={{ bg: "gray.800" }}
                alignSelf="center"
                colorScheme="gray"
                // minW="200"
                width="100%"
                _text={{ fontSize: "lg" }}
                py="3"
                borderRadius="0"
              >
                Done
              </Button>
            </HStack>
          ) : (
            <></>
          )}
        </Box>
      </Box>
      <Box
        flex="1"
        position="relative"
        shadow="5"
        mt={{ base: "0", md: "3", lg: "0" }}
      >
        <ResponsiveMap />

        {isLargeScreen ? (
          <></>
        ) : (
          <Button
            onPress={() => navigation.navigate("chooseTaxi")}
            bg="black"
            _pressed={{ bg: "gray.800" }}
            position="absolute"
            bottom="10"
            w="90%"
            display={origin == "" || destination == "" ? "none" : "flex"}
            py="3"
            alignSelf="center"
            _text={{ fontSize: "lg" }}
            borderRadius="0"
          >
            Done
          </Button>
        )}
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
      <NativeMap>
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
      </NativeMap>
    );
  },
  default: () => {
    return (
      <Box w="100%" h="100%">
        <WebMap />
      </Box>
    );
  },
});

export default PickDrop;
