import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Box, Button, HStack, Text } from "native-base";
import MapView, {
  Marker,
  Circle as MapCircle,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { FontAwesome } from "@expo/vector-icons";

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
  return (
    <Box bg="white" flex="1" safeArea>
      <Box borderWidth="1" borderColor="warmGray.300" p="4" shadow="8">
        <Text fontSize="lg">Driver confirmed and en route</Text>
      </Box>
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
          // lineDashPattern={[0]}
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={3}
          strokeColor="hotpink"
        />
      </MapView>
      <Box my="2" p="4">
        <Box width="100%" mb="6">
          <HStack justifyContent="space-between">
            <Text fontSize="md">Driver's name</Text>

            <Rating number={4} />
          </HStack>
        </Box>
        <HStack space="2">
          <Button bg="black" flex="1" _pressed={{ bg: "gray.700" }}>
            Contact
          </Button>
          <Button
            bg="black"
            _pressed={{ bg: "gray.700" }}
            flex="1"
            onPress={() => navigation.navigate("chooseTaxi")}
          >
            Cancel
          </Button>
        </HStack>
      </Box>
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

export default EnRoute;
