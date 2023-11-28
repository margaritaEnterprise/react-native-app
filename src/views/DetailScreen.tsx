import React, {useEffect, useState} from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MasterDetailStackParams } from '../types/types';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';


function DetailScreen() {

    const { params: {cca2, name, flag, lat, lng, coat, region} } = useRoute<NativeStackScreenProps<MasterDetailStackParams, "Detail">["route"]>();
    const [ coor, setCoor] = useState({
        latitude: lat,
        longitude: lng,
        latitudeDelta: 4,
        longitudeDelta: 4,
    });
    
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{region}</Text>
            <Image
                source={{
                    uri: flag
                }}
                style={styles.flag}
                onLoad={() => console.log("Imagen cargada correctamente")}
                onError={(error) => console.error("Error al cargar la imagen", error)}
                resizeMode="contain"
            />
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={coor}
                zoomEnabled={true}
                zoomControlEnabled={true}
            >
                <Marker coordinate={{ latitude: lat, longitude: lng }} />
            </MapView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1, 
        alignItems:'center',
        padding: 8,
        justifyContent: 'flex-start'

    },
    title: {
        fontSize: 30,
        color: '#555555',
        marginTop: 20

    },
    subtitle: {
        fontSize: 18,
        color: '#666666',
    },
    flag: {
        flex: 1,
        width: '100%',
    },
    map: {
        flex: 1,
        width: '100%',
        marginBottom: 8
    }

});
export default DetailScreen;
