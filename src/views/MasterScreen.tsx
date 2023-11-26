import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, TouchableOpacity, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import getAll from '../services/fetch';
import { Country, Location } from '../types/types';
import ItemCountry from '../components/ItemCountry';

function MasterScreen({navigation}) {
    
    const [allCountries, setAllCountries] = useState<Array<Country>>();
   
    useEffect(() => {
        const loadCountries = async() => {
            console.log("HOLA")
            try {
                const response = await getAll("cca2,translations,flags,latlng");
                let array:Array<Country> = [];
                response.map((item: any)=>{
                    let l:Location = {
                        lat: item.latlng[0],
                        lng: item.latlng[1]
                    }
                    let c:Country = {
                        cca2: item.cca2,
                        name: item.translations.spa.common,
                        flag: item.flags.png,
                        location: {
                            lat: item.latlng[0],
                            lng: item.latlng[1]
                        }
                    };
                    array.push(c);
                });
                setAllCountries(array);
                console.log(array);
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
                renderItem={({item}) => <ItemCountry navigation={navigation} data={item} press={() => {navigation.navigate('Detail');}}/>}
                keyExtractor={item => item.cca2}
            />
        </View>
    
    );
}
/**name={item.name} cca2={item.cca2} flag={item.flag} location={item.location}  */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0, 
        justifyContent:'center', 
        alignItems:'center'
    }
});

export default MasterScreen;
