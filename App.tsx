import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src/routes/Tab';
import { StatusBar } from 'react-native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
        <StatusBar barStyle='light-content' backgroundColor='red'/>
        <MyTabs />
    </NavigationContainer>
  );
}

export default App;
