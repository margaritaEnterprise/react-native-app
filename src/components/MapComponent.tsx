import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const MapComponent = ({data, style, isLocationScreen}) => {
    console.log(data)
    return(
        <View style={styles.container}>
        <MapView
            provider={PROVIDER_GOOGLE}
            region={data}
            zoomEnabled={true}
            zoomControlEnabled={true}
            showsMyLocationButton={isLocationScreen}
            showsUserLocation={isLocationScreen}
        >
            <Marker coordinate={{ latitude: data.latitude, longitude: data.longitude }} />
        </MapView>
        </View>

    )
}

export default MapComponent;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      ...StyleSheet.absoluteFillObject,
    },
  });