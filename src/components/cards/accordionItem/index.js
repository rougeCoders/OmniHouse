import React, { useState } from 'react';
import { View,TouchableWithoutFeedback,StyleSheet,Platform,UIManager,LayoutAnimation } from "react-native";
import { Image, Text,Icon } from 'react-native-elements';
import {amenitiesData}  from '../../../data/addAmenities.js';

const AccordionItem = (props) => {

    const [isExpanded, setIsExpanded] = useState( props.index == 0 ? true: false);

    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const toggleExpand= () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsExpanded(!isExpanded);
    }

    const AddAmenities = () => {
        props.onPress(props.data.type);
    }

    return(
        <View style={accordionStyle.accordionItemContainerStyle}>
            <TouchableWithoutFeedback onPress={toggleExpand}>
                <View style={accordionStyle.accordionItemHeaderStyle}>
                    <Text style={accordionStyle.accordionItemHeaderTextStyle}>{props.data.title}</Text>
                    <Icon 
                        name={ isExpanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} 
                        size={30}
                        type = 'materialicons'
                        color = '#fff'
                        style={accordionStyle.accordionItemArrowStyle}
                    />
                </View>
            </TouchableWithoutFeedback>
            { isExpanded && (
                <TouchableWithoutFeedback onPress={AddAmenities}>
                    <View style={accordionStyle.plusIconContainerStyle}>
                        <Text style={accordionStyle.plusIconStyle}>+</Text>
                    </View>
                </TouchableWithoutFeedback>
            )}
        </View>
    )
}

const accordionStyle = StyleSheet.create({
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
})

export default AccordionItem;