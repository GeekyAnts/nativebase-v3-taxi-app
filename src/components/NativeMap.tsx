import React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

function NativeMap(props: any) {
  return (
    <MapView
      style={{
        flex: 1,
        minHeight: 120,
      }}
      provider={PROVIDER_GOOGLE}
      region={{
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
        latitude: 12.9698,
        longitude: 77.75,
      }}
    >
      {props.children}
    </MapView>
  );
}

export default NativeMap;
