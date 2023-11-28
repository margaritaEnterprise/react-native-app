import React, {useEffect, FC} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Country } from '../types/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {MasterDetailStackParams} from '../types/types';
import {useNavigation} from '@react-navigation/native'


type ItemCountryNavigationProps = NativeStackNavigationProp<MasterDetailStackParams>;


const ItemCountry:FC<Country> = ({cca2, name, flag, lat, lng, coat, region}) => {
   
    const { navigate } = useNavigation<ItemCountryNavigationProps>();

    useEffect(() => {

        
    }, []);

    const goToDetail = () => {
        navigate("Detail", {cca2, name, flag, lat, lng, coat, region});
    }
    

    return ( coat &&
        <TouchableOpacity onPress={goToDetail}>
            <View  style={styles.container}>
                <Image
                    source={{
                        uri: coat
                    }}
                    style={styles.imageFlag}
                    onLoad={() => console.log("Imagen cargada correctamente")}
                    onError={(error) => console.error("Error al cargar la imagen", error)}
                    resizeMode="contain"
                />
                <Text style={styles.cca2}>{cca2}</Text>
                <Text style={styles.title}>{name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        backgroundColor: '#DDD',
        marginVertical: 8,
        borderRadius: 10,
        justifyContent: 'flex-start', 
        alignItems:'center',
        padding: 10,
        
    },
    title: {
        fontSize: 20,
        color: '#333333',
        paddingStart: 10

    },
    cca2: {
        color: 'red',
        alignItems:'center',
        padding: 15
    },
    imageFlag: {
        width: 60, 
        height: 60,
    }
});

export default ItemCountry;
