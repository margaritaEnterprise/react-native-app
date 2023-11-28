import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, StatusBar, StyleSheet} from 'react-native';
import getAll from '../services/fetch';
import { Country } from '../types/types';
import ItemCountry from '../components/ItemCountry';

function MasterScreen() {
    
    const [allCountries, setAllCountries] = useState<Country[]>([]);
   
    useEffect(() => {
        const loadCountries = async() => {
            try {
                const response = await getAll("cca2,translations,flags,latlng,coatOfArms,region");
                let array:Country[] = [];
                response.map((item: any)=>{
                    let co:Country = {
                        cca2: item.cca2,
                        name: item.translations.spa.common,
                        flag: item.flags.png,
                        lat: item.latlng[0],
                        lng: item.latlng[1],
                        coat: item.coatOfArms.png,
                        region: item.region
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
            <FlatList style={{flex:1}}
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
        alignItems:'center',
        marginHorizontal: 5
    },

});

export default MasterScreen;
