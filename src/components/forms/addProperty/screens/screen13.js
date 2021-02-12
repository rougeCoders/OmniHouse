import React, { useState } from 'react';
import { View, FlatList,StyleSheet, TouchableOpacity,Image } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import IconButton from '../../../cards/iconButton/index.js';
import CircleButton from '../../../cards/circleButton/index.js';
import constants from '../../../../constants.js';
import styles from './forms.Style.js';
import { useDispatch, useSelector } from 'react-redux';

import {propertyCertificateData} from '../../../../data/propertyCertificates.js';

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../../selection.json';
const CustomIcon = createIconSetFromIcoMoon(
  icoMoonConfig
);

const Screen13 = (props) => {
    console.log("ddcf");
    const dispatch = useDispatch();
    console.log('Testr');
    console.log(propertyCertificateData);
    const [selectedPropertyCerticate, setSelectedPropertyCerticate] = useState();
    
    const handlePropertyCertificateSelection = (content) => {
        setSelectedPropertyCerticate(content);
    }

    const handleSubmit = () => {
        
    }

    return (
        <View style={styles.formContainer}>
            <View style={{padding:'10%'}}>
            <Text h4 style={styles.headText}>Upload the property's certificate</Text>
            
            <FlatList
                style={{alignSelf:'center', marginBottom:25}}
                data={propertyCertificateData}
                renderItem={({ item }) => 
                    <IconButton title={item.title}
                        value={item.value}  
                        icon={item.icon}
                        buttonPress={handlePropertyCertificateSelection}
                        {...(selectedPropertyCerticate === item.value && { backgroundColor: 'purple'})}
                    />
                }
                keyExtractor={item => item.index}
                numColumns={2}
                />
            <TouchableOpacity
                onPress={() => setShowCalendar(true)}
                style={{backgroundColor: "#93227F", padding: 10, marginBottom: 20, flexDirection: 'row', alignItems: 'center',borderRadius:10}}>
                <CustomIcon
                    name='Certificate'
                    size={20}
                    color="white"
                    style={{marginLeft:5}}
                    />
                    <Text style={{color:'#fff', fontSize:16, marginLeft: 10}}>Book a certtificate check</Text>
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
                    <Button
                        icon={
                            <Icon
                                name='navigate-next'
                                type='materialicons'
                                size={30}
                                color="white"
                            />
                        }
                    iconRight
                    type="clear"
                    titleStyle={{color:'white'}}
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

export default Screen13;