import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MasterDetailStackParams } from '../types/types';


function DetailScreen() {

    const { params: {cca2, name, flag, lat, lng} } = useRoute<NativeStackScreenProps<MasterDetailStackParams, "Detail">["route"]>();

    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>{name}</Text>
        </View>
    );
}
export default DetailScreen;
