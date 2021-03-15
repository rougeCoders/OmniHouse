import React, { useState } from 'react';
import { View, FlatList,StyleSheet, TouchableOpacity,Image,TouchableWithoutFeedback } from 'react-native';
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
import AccordionItem from '../../../cards/accordionItem/index.js';
import { ScrollView } from 'react-native-gesture-handler';
import Accordion from 'react-native-collapsible/Accordion';


const CustomIcon = createIconSetFromIcoMoon(
  icoMoonConfig
);

const Screen14 = (props) => {

    const roomsDetails = useSelector(state => state.addProperty.roomsDetails);
    console.log(roomsDetails);
    const dispatch = useDispatch();
    const handleSubmit = () => {
        props.navigation.navigate('Screen16');
    }

    const [selectedAccordion, setSelectedAccordion] =  useState([0]);

    const addAmenitiesHandler = (section,isActive) => {
        props.navigation.navigate('Screen15',{
            selectedAmenityType:section.roomType,
            selectedAmenity: section.title,
            selectedAmenityKey: section.uniqueKey
        });
    }

    const toggleExpand = () => {

    }

    const AddAmenities = () => {

    }

    const renderAccHeader = (section,_, isActive) => {
        return (
            <View style={amenitiesStyle.accordionItemHeaderStyle}>
                    <Text style={amenitiesStyle.accordionItemHeaderTextStyle}>{section.title}</Text>
                    <Icon 
                        name={isActive?'keyboard-arrow-up':'keyboard-arrow-down'} 
                        size={30}
                        type = 'materialicons'
                        color = '#fff'
                        style={amenitiesStyle.accordionItemArrowStyle}
                    />
            </View>
        )
    }

    const renderAccContent = (section,_, isActive) => {
        return ( 
            <TouchableWithoutFeedback onPress={()=>addAmenitiesHandler(section,isActive)}>
                <View style={amenitiesStyle.plusIconContainerStyle}>
                    <Text style={amenitiesStyle.plusIconStyle}>+</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    const onChangeAccordionItem = (section) => {
        setSelectedAccordion(section);
    }

    return (
            <ScrollView contentContainerStyle={amenitiesStyle.containerStyle}>
                <View  style={amenitiesStyle.containerChildStyle}>
                    <Text h4 style={{color:'#fff'}}>Please add any amenities that come with the party</Text>
                  
                    <Text style={{color:'#fff', marginTop:15, marginBottom:15}}>Any items added will be autofilled to an inventory check report to save you adding it twice - you will still need to add the condition of the items later.</Text>
                    
                    <Accordion
                        sections={roomsDetails}
                        activeSections={selectedAccordion}
                        renderHeader={renderAccHeader}
                        renderContent={renderAccContent}
                        onChange = {onChangeAccordionItem}
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
                </View>
            </ScrollView>
    )
}
const amenitiesStyle = StyleSheet.create({
    containerStyle:{
        justifyContent:'center', 
        flexGrow:1
    },
    containerChildStyle:{
        padding: '10%',
        marginBottom:25 
    },
    accordionItemHeaderStyle:{
        flexDirection:'row',
        padding:10,
        backgroundColor:'rgba(146, 26, 126, 0.3)',
        borderRadius:5,
        marginBottom:25
    },
    accordionItemHeaderTextStyle:{
        color:'#fff', 
        fontSize:20, 
        flexGrow:1
    },
    plusIconContainerStyle:{
        backgroundColor:'rgba(146, 26, 126, 0.3)',
        width:44,
        height:44,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:25
    },
    plusIconStyle:{
        color:'#fff',
        fontSize:20
    }
});

export default Screen14;