import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { StyleSheet, View, Text } from 'react-native';
import { Camera, useCameraDevice } from 'react-native-vision-camera';

function CameraScreen({ navigation }) {
  const device = useCameraDevice('back');
  const camera = useRef(null);
  const [imageData, setImageData] = useState('');
  const [takePhotoClicked, setTakePhotoClicked] = useState(false);
  useEffect(() =>{
    checkPermission();
  },[]);

  const checkPermission = async () =>{
    await Camera.requestCameraPermission();
    await Camera.requestMicrophonePermission();

  };

 
  const takePicture = async () =>{
    if (camera != null){
      const photo = await camera.current.takePhoto();
      setImageData(photo.path);
      setTakePhotoClicked(true);
    }
  };


  if (device == null) {return <ActivityIndicator />;}

  return (
    <View style={styles.container}>
      {!takePhotoClicked ? (
      <View style={{flex:1}} >
        <Camera ref={camera} style={StyleSheet.absoluteFill} device={device} isActive={true} photo />
        <TouchableOpacity style={styles.buttonCamera} onPress={() => takePicture()}/>
      </View>) :
      (
        <View style={{flex:1, justifyContent:'center', alignItems:'center', gap: 10}}>
          {imageData !== '' && (<Image source={{uri:'file://' + imageData}} style={{width:'90%', height:'90%', borderRadius: 10}} />)}
          <TouchableOpacity style={{width:'90%',height:50,borderWidth:1,alignSelf:'center',borderRadius:10,justifyContent:'center', alignItems:'center'}} onPress={() => {setTakePhotoClicked(false)}}>
            <Text>Go to Camera</Text>
          </TouchableOpacity>
        </View>
      )}
    
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  buttonCamera:{
    width:65,
    height:65,
    borderRadius:50,
    backgroundColor:'#ffffff0',
    borderWidth: 5,
    borderColor: '#fff',
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
});

export default CameraScreen;
