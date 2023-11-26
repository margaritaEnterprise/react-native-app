import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const ItemCountry = ({data, press, navigation}) => {
    
   
    useEffect(() => {

    }, []);

    return ( 
        <TouchableOpacity onPress={() => {navigation.navigate('Detail')}}>
            <View style={styles.item}>
                <Text style={styles.title}>{data.name}</Text>
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
