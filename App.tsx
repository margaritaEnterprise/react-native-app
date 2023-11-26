import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src/routes/Tab';

function App(): JSX.Element {
  return (
    <NavigationContainer>
        <MyTabs />
    </NavigationContainer>
  );
}

export default App;
