import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { AntDesign } from '@expo/vector-icons';
// Basic code for using the camera on expo was obtained from: https://docs.expo.io/versions/latest/sdk/camera/ and https://medium.com/wesionary-team/camera-module-in-react-native-with-expo-camera-3b8c9f3cd076

export const HomePage = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Has Permission is Null</Text>;
  }
  if (hasPermission === false) {

    return <Text style={{ flex: 1, textAlign: 'center', textAlignVertical: 'center' }}>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={ref => {
        setCameraRef(ref) ;
  }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>

        </View>

        <View style={styles.transparent}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 40, color: 'white', width: 55 }}> Flip </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignSelf: 'center' }}
            onPress={async () => {
              if (cameraRef) {
                let photo = await cameraRef.takePictureAsync();
                // console.log('photo', photo);
                
              }
              navigation.push('Picture');
            }}>
            <AntDesign style={styles.camera} name="camera" size={24} color="white" />

          </TouchableOpacity>
          <Text style={{ fontSize: 18, marginBottom: 10, color: 'white', width: 55 }}> Files </Text>
        </View>
      </Camera>



    </View>
  );
}

const styles = StyleSheet.create({
  transparent: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "transparent",

  },
  camera: {
    //   backgroundColor: 'transparent',
    fontSize: 100,
  },
});

export default HomePage;