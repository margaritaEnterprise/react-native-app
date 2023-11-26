import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

function MasterScreen({navigation}) {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Master Screen</Text>
      <TouchableOpacity onPress={() => {navigation.navigate('Detail');}}>
        <Text>Go to Detail</Text>
      </TouchableOpacity>
    </View>
  );
}
export default MasterScreen;
