import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LocationScreen from '../views/LocationScreen';
import CameraScreen from '../views/CameraScreen';
import MasterDetailStack from './Stacks/MasterDetailStack';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Location') {
            iconName = focused ? 'my-location' : 'my-location';
          } else if (route.name === 'Camera') {
            iconName = focused ? 'camera' : 'camera';
          } else if (route.name === 'MasterDetail') {
            iconName = focused ? 'public' : 'public';
          }
          return <Icon name={iconName || ''} color={color} size={size} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: 'red',
          height: 50,
        },
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTintColor: 'white',
      })}>
      <Tab.Screen name="Location" component={LocationScreen} />
      <Tab.Screen name="Camera" component={CameraScreen} />
      <Tab.Screen name="MasterDetail" component={MasterDetailStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
