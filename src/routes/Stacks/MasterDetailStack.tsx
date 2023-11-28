import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MasterScreen from '../../views/MasterScreen';
import DetailScreen from '../../views/DetailScreen';
import { MasterDetailStackParams } from '../../types/types';

const Stack = createNativeStackNavigator<MasterDetailStackParams>();

function MasterDetailStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Master"
                component={MasterScreen}
                options={({route}) => ({
                    headerStyle: {
                        backgroundColor: 'red',
                    },
                    headerTintColor: 'white',
                })}
              />
              <Stack.Screen
                  name="Detail"
                  component={DetailScreen}
                  options={({route}) => ({
                      headerStyle: {
                          backgroundColor: 'red',
                      },
                      headerTintColor: 'white',
                })}
            />
        </Stack.Navigator>
    );
}

export default MasterDetailStack;
