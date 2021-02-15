import React, { useState } from 'react';
import { View, FlatList,StyleSheet, TouchableOpacity,Image } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import IconButton from '../../../cards/iconButton/index.js';
import CircleButton from '../../../cards/circleButton/index.js';
import constants from '../../../../constants.js';
import styles from './forms.Style.js';
import { useDispatch, useSelector } from 'react-redux';
import { addPropertyImages } from '../../../../store/actions/addPropertyAction.js';



const Screen11 = (props) => {

    const dispatch = useDispatch();

    const addPropertyImageCallBack = (response) => {
        dispatch(addPropertyImages(response));
    }

    const propertyImages = useSelector(state => state.addProperty.propertyImages);
    const showCameraScreen = () => {
        props.navigation.navigate('Screen12',{
            onGoBack: addPropertyImageCallBack,
        });
    }
   
    
    const handleSubmit = () => {
        props.navigation.navigate('Screen13');
    }

    return (
        <View style={styles.formContainer}>
            <View style={{padding:'10%'}}>
            <Text h4 style={styles.headText}>Upload and order images of the property for prospective tenants</Text>
            <Text style={{color:'#fff', marginBottom:20}}>Using professional photos will boost the chances of finding a tenant by 80%. Don’t want to pay? Follow our guide to help you capture the highest quality photos. The more photos the better!</Text>
            
            { propertyImages && propertyImages.length>0 && (

            <FlatList
                    style = {cameraScreenStyles.imageFlatList}
                    data={propertyImages}
                    renderItem={({ item }) => 
                    <View style={cameraScreenStyles.imageFlatListItem}> 
                        <Image
                        source={{
                            uri: item.uri
                        }}
                        style={cameraScreenStyles.imageStyle}
                        />
                   </View>
                    }
                    keyExtractor={item => item.fileName}
                    numColumns={3}
                />
            )
            }
            <TouchableOpacity style={cameraScreenStyles.dashedBorderContainer} onPress={showCameraScreen}>
                <Icon
                    name='camera'
                    type= 'ionicon'
                    color='#517fa4'
                />
                <View style={cameraScreenStyles.plusIconContainer}>
                    <Text style={cameraScreenStyles.plusIcon}>
                        +
                    </Text>
                </View>
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
                    <Button
                        icon={
                            <Icon
                                name='navigate-next'
                                type='materialicons'
                                size={OmniHouseTheme.spacing(4)}
                                color={OmniHouseTheme.palette.primary.font}
                            />
                        }
                    iconRight
                    type="clear"
                    titleStyle={styles.nextButtonTitle}
                    buttonStyle={styles.nextButton}
                    title="Next"
                    onPress={handleSubmit}/>
                </View>
        </View>
    </View>
    )
}
const cameraScreenStyles = StyleSheet.create({
    dashedBorderContainer:{
        width: 84,
        height: 84,
        borderWidth: 3,
        borderColor: "#517fa4",
        borderStyle: "dashed",
        borderRadius: 5,
        marginTop: 15,
        marginBottom: 15,
        justifyContent: 'center'
    },
    plusIconContainer:{
        justifyContent:'center',
        alignItems:'stretch',
        width:18,
        height:18, 
        position:'absolute',
        bottom:-9,
        right:-9
    },
    plusIcon:{
        backgroundColor:'#93227F',
        color:'#fff', 
        textAlign:'center'
    },
    imageStyle: {
        height: 84,
        margin: 5,
    },
    imageFlatList:{
        marginTop : 20,
        marginBottom : 20
    },
    imageFlatListItem:{
        flex:1
    }
});

export default Screen11;