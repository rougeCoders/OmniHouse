import React, { useState } from 'react';
import { View, FlatList,StyleSheet,TouchableOpacity, Platform,PermissionsAndroid } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import IconButton from '../../../cards/iconButton/index.js';
import constants from '../../../../constants.js';
import styles from './forms.Style.js';
import {launchCamera,launchImageLibrary} from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';


const Screen12 = (props) => {
 
    const dispatch = useDispatch();

    const requestCameraPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Camera Permission',
              message: 'App needs camera permission',
            },
          );
          // If CAMERA Permission is granted
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
          console.warn(err);
          return false;
        }
      } else return true;
    };
  
    const requestExternalWritePermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: 'External Storage Write Permission',
              message: 'App needs write permission',
            },
          );
          // If WRITE_EXTERNAL_STORAGE Permission is granted
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
          console.warn(err);
          alert('Write permission err', err);
        }
        return false;
      } else return true;
    };
    
    const captureImage = async (type) => {
        let options = {
          mediaType: type,
          maxWidth: 300,
          maxHeight: 550,
          quality: 1,
          videoQuality: 'low',
          saveToPhotos: true
        };
        let isCameraPermitted = await requestCameraPermission();
        let isStoragePermitted = await requestExternalWritePermission();
        if (isCameraPermitted && isStoragePermitted) {
            launchCamera(options, (response) => {
              if (response.didCancel) {
                alert('User cancelled camera picker');
                return;
              } else if (response.errorCode == 'camera_unavailable') {
                alert('Camera not available on device');
                return;
              } else if (response.errorCode == 'permission') {
                alert('Permission not satisfied');
                return;
              } else if (response.errorCode == 'others') {
                alert(response.errorMessage);
                return;
              }
              if(props.route.params.additionalParams){
                response = {...response, ...props.route.params.additionalParams};
              }
              props.route.params.onGoBack(response);
              props.navigation.goBack();
            });
        }
      };

      const chooseFile = (type) => {
        let options = {
          mediaType: type,
          maxWidth: 300,
          maxHeight: 550,
          quality: 1,
        };
        launchImageLibrary(options, (response) => {
    
          if (response.didCancel) {
            alert('User cancelled camera picker');
            return;
          } else if (response.errorCode == 'camera_unavailable') {
            alert('Camera not available on device');
            return;
          } else if (response.errorCode == 'permission') {
            alert('Permission not satisfied');
            return;
          } else if (response.errorCode == 'others') {
            alert(response.errorMessage);
            return;
          }
          if(props.route.params.additionalParams){
            response = {...response, ...props.route.params.additionalParams};
          }
          props.route.params.onGoBack(response);
          props.navigation.goBack();
        });
      };
    
    return (
        <View style={styles.formContainer}>
            <View style={{padding:'10%'}}>
                <TouchableOpacity
                    style={takeGalleryScreenStyles.buttonStyles}
                    onPress={() => chooseFile('photo')}>
                    <Text style={takeGalleryScreenStyles.buttonTextStyles}>Phone  Gallery</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={takeGalleryScreenStyles.buttonStyles}
                 >
                    <Text style={takeGalleryScreenStyles.buttonTextStyles}>Google Docs</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={takeGalleryScreenStyles.buttonStyles}
                    onPress={() => captureImage('photo')}>
                    <Text style={takeGalleryScreenStyles.buttonTextStyles}>Take Photos</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const takeGalleryScreenStyles = StyleSheet.create({
   buttonStyles:{
       width: '100%',
       backgroundColor: '#C4C4C4',
       padding: 20,
       marginBottom: 20
   },
   buttonTextStyles:{
       fontSize: 16
   }
})

export default Screen12;