import React, { useState } from 'react';
import { View, FlatList,StyleSheet, TouchableOpacity,Image,TextInput } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import IconButton from '../../../cards/iconButton/index.js';
import CircleButton from '../../../cards/circleButton/index.js';
import constants from '../../../../constants.js';
import styles from './forms.Style.js';
import { useDispatch, useSelector } from 'react-redux';

import {propertyCertificateData} from '../../../../data/propertyCertificates.js';

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../../selection.json';
import { addPropertyCertificateDetails } from '../../../../store/actions/addPropertyAction.js';
import { GasSafe,Delete,Bedroom } from '../../../../images/index.js';
import AccordionItem from '../../../cards/accordionItem/index.js';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {amenitiesData}  from '../../../../data/addAmenities.js';
import AmenitySection from '../../../cards/amenitiesSection/index.js';
import { addAmenities } from '../../../../store/actions/addPropertyAction.js';
import Textarea from 'react-native-textarea';

const CustomIcon = createIconSetFromIcoMoon(
  icoMoonConfig
);



const Screen16 = (props) => {

   
    const dispatch = useDispatch();
    const handleSubmit = () => {
        props.navigation.navigate('Screen16');
    }

    const AddAnotherItem = () =>{

    };

    return (
            <ScrollView contentContainerStyle={shortPropertyDescriptionStyle.containerStyle}>
                <View style={shortPropertyDescriptionStyle.containerChildStyle}>
                    <Text h4 style={{color:'#fff', marginBottom:10}}>Short Property Description</Text>
                    <Text style={{color:'#fff'}}>Add a short description to catch viewers attention at the top of your property listing</Text>
                    <TextInput
                        style={shortPropertyDescriptionStyle.textareaContainer}
                        underlineColorAndroid="transparent"
                        placeholder="Type something"
                        placeholderTextColor="#fff"
                        numberOfLines={10}
                        multiline={true}
                    />
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

                    <Text style={{color:'#fff'}}>Suggested Description</Text>
                    <TextInput
                        style={shortPropertyDescriptionStyle.textareaContainer}
                        underlineColorAndroid="transparent"
                        placeholder="Type something"
                        placeholderTextColor="#fff"
                        numberOfLines={10}
                        multiline={true}
                    />

                    <TouchableOpacity onPress={AddAnotherItem} style={{ alignItems:'flex-end'}}>
                                    <View style={shortPropertyDescriptionStyle.addAnotherItemContainerStyle}>
                                        <Text style={shortPropertyDescriptionStyle.addAnotherItemTextStyle}>Use this</Text>
                                    </View>
                    </TouchableOpacity>

                    <TextInput
                        style={shortPropertyDescriptionStyle.textareaContainer}
                        underlineColorAndroid="transparent"
                        placeholder="Type something"
                        placeholderTextColor="#fff"
                        numberOfLines={10}
                        multiline={true}
                    />

                    <TouchableOpacity onPress={AddAnotherItem} style={{ alignItems:'flex-end'}}>
                                    <View style={shortPropertyDescriptionStyle.addAnotherItemContainerStyle}>
                                        <Text style={shortPropertyDescriptionStyle.addAnotherItemTextStyle}>Use this</Text>
                                    </View>
                    </TouchableOpacity>
                    
                </View>
            </ScrollView>
    )
}
const shortPropertyDescriptionStyle = StyleSheet.create({
    containerStyle:{
        justifyContent:'center', 
        flexGrow:1
    },
    containerChildStyle:{
        padding: '10%',
        marginBottom:25 
    },
    textareaContainer:{
        backgroundColor:'gray',
        marginTop:25,
        height: 110,
        padding: 10
    },
    textInputContainer:{
        backgroundColor:'gray',
        marginTop:25,
        height: 110,
        padding: 10
    },
    addAnotherItemContainerStyle:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#fff',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        borderRadius:20,
        justifyContent:'center',
        marginTop:15
    },
    addAnotherItemTextStyle:{
        color:'#fff'
    }
});

export default Screen16;