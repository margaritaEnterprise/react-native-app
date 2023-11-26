import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MasterScreen from '../../views/MasterScreen';
import DetailScreen from '../../views/DetailScreen';

const Stack = createNativeStackNavigator();

function MasterDetailStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Master" component={MasterScreen}/>
            <Stack.Screen name="Detail" component={DetailScreen}/>
        </Stack.Navigator>
      );
}

export default MasterDetailStack;
