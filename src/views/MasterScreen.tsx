import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, StatusBar, StyleSheet} from 'react-native';
import getAll from '../services/fetch';
import { Country } from '../types/types';
import ItemCountry from '../components/ItemCountry';

function MasterScreen({navigation}) {
    
    const [allCountries, setAllCountries] = useState<Country[]>([]);
   
    useEffect(() => {
        const loadCountries = async() => {
            console.log("HOLA")
            try {
                const response = await getAll("cca2,translations,flags,latlng");
                let array:Country[] = [];
                response.map((item: any)=>{
                    let co:Country = {
                        cca2: item.cca2,
                        name: item.translations.spa.common,
                        flag: item.flags.png,
                        lat: item.latlng[0],
                        lng: item.latlng[1]
                    };
                    array.push(co);
                });
                setAllCountries(array);
//                console.log(array);
            } catch(error) {
                console.log(error)
            }
        } 
        loadCountries();
        
    }, []);


    return ( 
        <View style={styles.container}>
            <Text>Master Screen</Text>
            <FlatList
                data={allCountries}
                renderItem={({item}) => <ItemCountry {...item}/>}
                keyExtractor={item => item.cca2}
            />
        </View>
    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0, 
        justifyContent:'center', 
        alignItems:'center'
    }
});

export default MasterScreen;
