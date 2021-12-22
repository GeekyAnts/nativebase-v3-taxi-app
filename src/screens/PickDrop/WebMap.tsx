import React, { useEffect, useState, useRef } from "react";

import { VStack, Center, View } from "native-base";
import Constants from "expo-constants";

const GOOGLE_MAPS_API_KEY = Constants?.manifest?.extra?.MAP_API;
const MAP_SCRIPT_WITH_API_KEY = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;

export default function WebMap() {
  const [mapLoaded, setMapLoaded] = useState(
    document.body?.dataset?.mapLoaded ? true : false
  );
  const mapContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check if map script is already present in DOM
    if (!mapLoaded) {
      const mapScript = document.createElement("script");
      mapScript.src = MAP_SCRIPT_WITH_API_KEY;

      mapScript.onload = () => {
        // set dataset property on body to indicate map script has been loaded.
        document.body.dataset.mapLoaded = "true";
        setMapLoaded(true);
      };
      document.head.appendChild(mapScript);
    }
  }, []);

  useEffect(() => {
    if (mapLoaded) {
      //@ts-ignore
      const map = new window.google.maps.Map(mapContainerRef.current, {
        zoom: 15,
        mapTypeId: "terrain",
        center: { lat: 12.9698, lng: 77.75 },
      });

      //@ts-ignore
      new window.google.maps.Marker({
        position: { lat: 12.9698, lng: 77.75 },
        map: map,
        title: "source",
      });
    }
  }, [mapLoaded]);

  return (
    <>
      {mapLoaded ? (
        <VStack
          safeAreaBottom
          flex="1"
          space={{ base: "4", md: "0" }}
          rounded={{ md: "lg" }}
          borderWidth={{ base: "0", md: "1" }}
          _light={{
            bg: { md: "white", base: "primary.50" },
            borderColor: "coolGray.200",
          }}
          _dark={{
            bg: { base: "coolGray.700", md: "coolGray.700" },
            borderColor: "coolGray.700",
          }}
        >
          <View flex="1" ref={mapContainerRef} />
        </VStack>
      ) : (
        <Center mt="6">Loading ...</Center>
      )}
    </>
  );
}
