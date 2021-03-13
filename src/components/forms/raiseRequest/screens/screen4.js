import React, { useState } from 'react';
import { View, FlatList,StyleSheet,TouchableOpacity, Platform,PermissionsAndroid,ActivityIndicator } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import {launchCamera,launchImageLibrary} from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import {firebase} from '../../../../firebase/firebase.js';
import RNFetchBlob from 'react-native-fetch-blob'
import storage from '@react-native-firebase/storage';

const Screen4 = (props) => {
 
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);

    const Blob = RNFetchBlob.polyfill.Blob
    const fs = RNFetchBlob.fs

    const [isLoading ,setIsLoading] = useState(false);
    

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

    const uploadImagesToFirebase = async (response,imageName) => {
        let uploadUri = Platform.OS === 'ios' ? response.uri.replace('file://', '') : response.uri;
        let uploadedImage = storage().ref(imageName)
        await uploadedImage.putFile(uploadUri);
        let downloadUrl = await uploadedImage.getDownloadURL();
        console.log(downloadUrl);
        setIsLoading(false)
        response = {...response,imageUrl: downloadUrl};
        props.route.params.onGoBack(response);
        props.navigation.goBack();
    }
    
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
              setIsLoading(true)
              let imageName = user.uid + response.fileName;
              if(props.route.params.additionalParams){
                response = {...response, ...props.route.params.additionalParams};
              }

              response = {...response,imageName: imageName};

              uploadImagesToFirebase(response,imageName)
            });
        }
      };

      const chooseFile = async (type) => {
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
          setIsLoading(true)
          let imageName = user.uid+ response.fileName;
          if(props.route.params.additionalParams){
            response = {...response, ...props.route.params.additionalParams};
          }

          response = {...response,imageName: imageName};

          uploadImagesToFirebase(response,imageName)

        });
      };
    
    return (
        <View style={takeGalleryScreenStyles.formContainer}>
            <View style={{padding:'10%'}}>
                 { isLoading && (
                    <View style={takeGalleryScreenStyles.preloader}>
                        <ActivityIndicator size="large" color="#9E9E9E"/>
                     </View>
                )}
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
    formContainer :{
        marginBottom: OmniHouseTheme.spacing(12.5),
        flex:1,
        flexDirection:'column',
        justifyContent: 'space-around',
    },
    buttonStyles:{
        width: '100%',
        backgroundColor: '#C4C4C4',
        padding: 20,
        marginBottom: 20
    },
    buttonTextStyles:{
        fontSize: 16
    },
    preloader: {
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow:1
    }
})

export default Screen4;