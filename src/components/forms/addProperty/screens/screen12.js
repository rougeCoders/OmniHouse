import React, { useState } from 'react';
import { View, FlatList,StyleSheet,TouchableOpacity, Platform,PermissionsAndroid } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import IconButton from '../../../cards/iconButton/index.js';
import constants from '../../../../constants.js';
import styles from './forms.Style.js';
import {launchCamera,launchImageLibrary} from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { addPropertyImages } from '../../../../store/actions/addPropertyAction.js';

const Screen12 = (props) => {
 
    const dispatch = useDispatch();
    
    const captureImage = async (type) => {
        let options = {
          mediaType: type,
          maxWidth: 300,
          maxHeight: 550,
          quality: 1,
          videoQuality: 'low',
          saveToPhotos: true,
        };
        launchCamera(options, (response) => {
            console.log('Response = ', response);
    
            if (response.didCancel) {
              console.log('User cancelled camera picker');
              return;
            } else if (response.errorCode == 'camera_unavailable') {
              console.log('Camera not available on device');
              return;
            } else if (response.errorCode == 'permission') {
              console.log('Permission not satisfied');
              return;
            } else if (response.errorCode == 'others') {
              console.log(response.errorMessage);
              return;
            }
            console.log('base64 -> ', response.base64);
            console.log('uri -> ', response.uri);
            console.log('width -> ', response.width);
            console.log('height -> ', response.height);
            console.log('fileSize -> ', response.fileSize);
            console.log('type -> ', response.type);
            console.log('fileName -> ', response.fileName);
            dispatch(addPropertyImages(response));
            props.navigation.navigate('Screen11');
          });
      };

      const chooseFile = (type) => {
        let options = {
          mediaType: type,
          maxWidth: 300,
          maxHeight: 550,
          quality: 1,
        };
        launchImageLibrary(options, (response) => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled camera picker');
            return;
          } else if (response.errorCode == 'camera_unavailable') {
            console.log('Camera not available on device');
            return;
          } else if (response.errorCode == 'permission') {
            console.log('Permission not satisfied');
            return;
          } else if (response.errorCode == 'others') {
            console.log(response.errorMessage);
            return;
          }
          console.log('base64 -> ', response.base64);
          console.log('uri -> ', response.uri);
          console.log('width -> ', response.width);
          console.log('height -> ', response.height);
          console.log('fileSize -> ', response.fileSize);
          console.log('type -> ', response.type);
          console.log('fileName -> ', response.fileName);
          dispatch(addPropertyImages(response));
          props.navigation.navigate('Screen11');
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