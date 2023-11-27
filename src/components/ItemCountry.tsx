import React, {useEffect, FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Country } from '../types/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {MasterDetailStackParams} from '../types/types';
import {useNavigation} from '@react-navigation/native'


type ItemCountryNavigationProps = NativeStackNavigationProp<MasterDetailStackParams>;


const ItemCountry:FC<Country> = ({cca2, name, flag, lat, lng}) => {
   
    const { navigate } = useNavigation<ItemCountryNavigationProps>();

    useEffect(() => {

        
    }, []);

    const goToDetail = () => {
        navigate("Detail", {cca2, name, flag, lat, lng});
    }
    

    return ( 
        <TouchableOpacity onPress={goToDetail}>
            <View style={styles.item}>
                <Text>{cca2}</Text>
                <Text>{name}</Text>
                <Text>{flag}</Text>
                <Text>{lat}</Text>
                <Text>{lng}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default ItemCountry;
