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
import { addPropertyCertificateDetails } from '../../../../store/actions/addPropertyAction.js';
import { GasSafe,Delete,Bedroom } from '../../../../images/index.js';
import AccordionItem from '../../../cards/accordionItem/index.js';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {amenitiesData}  from '../../../../data/addAmenities.js';
import AmenitySection from '../../../cards/amenitiesSection/index.js';
import { addAmenities } from '../../../../store/actions/addPropertyAction.js';

const CustomIcon = createIconSetFromIcoMoon(
  icoMoonConfig
);



const Screen15 = (props) => {

    const selectedAmenities = useSelector(state => state.addProperty.addedAmenities);
    
    const itemData = amenitiesData.find(item => item.type == props.route.params.selectedAmenityType);
    const selectedAmenity = props.route.params.selectedAmenity;
    const selectedAmenityKey = props.route.params.selectedAmenityKey;
    const dispatch = useDispatch();

   
    const AddAnotherItem = () =>{

    };
    

    const selectedItemAmenities = selectedAmenities.find( item => item.key == selectedAmenityKey);
    console.log(selectedItemAmenities);

    const AmenitySectionHandler = (index, parentKey) => {
        var obj = {
            index: index,
            parentKey: parentKey,
            selectedAmenity : selectedAmenity,
            selectedAmenityKey: selectedAmenityKey
        }
        dispatch(addAmenities(obj));
    }

    return (
            <ScrollView contentContainerStyle={amenitiesStyle.containerStyle}>
                <View style={amenitiesStyle.containerChildStyle}>
                    <Text h4 style={amenitiesStyle.amenitiesHeaderStyle}>{itemData.amenities.title}</Text>
                    {
                        itemData.amenities.items.map((parentItem,parentIndex) => (
                            <View style={amenitiesStyle.amenitiesSectionContainerStyle}>
                                <Text style={amenitiesStyle.headerTitle}>{parentItem.title}</Text>
                                <View style={amenitiesStyle.amenitiesSubSectionContainerStyle}>
                                {
                                    parentItem.items.map((item,index) => (
                                        <AmenitySection data={item} selectedItemAmenities={selectedItemAmenities} parentKey={parentItem.key} index={index} onPress={AmenitySectionHandler}></AmenitySection>
                                    ))
                                }
                                </View>
                                <TouchableOpacity onPress={AddAnotherItem} style={{ alignItems:'flex-end'}}>
                                    <View style={amenitiesStyle.addAnotherItemContainerStyle}>
                                        <Text style={amenitiesStyle.addAnotherItemPlusStyle}>+</Text>
                                        <Text style={amenitiesStyle.addAnotherItemTextStyle}>Add Another  Item</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ))
                    }
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
    headerTitle:{
        color:'#fff',
        fontSize:16
    },
    amenitiesHeaderStyle:{
        color:'#fff',
        marginBottom:30
    },
    amenitiesSectionContainerStyle:{
        marginBottom:20
    },
    amenitiesSubSectionContainerStyle:{
        flexDirection:'row', 
        justifyContent:'center',
        marginBottom:25,
        marginTop:25,
        flexWrap:'wrap'
    },
    amenitiesSubSectionStyle:{
        color:'#fff',
        textAlign:'center'
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
        justifyContent:'center'
    },
    addAnotherItemPlusStyle:{
        color:'#fff',
        marginRight:10
    },
    addAnotherItemTextStyle:{
        color:'#fff'
    }
});

export default Screen15;