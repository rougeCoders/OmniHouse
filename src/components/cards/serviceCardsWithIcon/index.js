import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity,StyleSheet } from "react-native";
import { Image, Text,Icon } from 'react-native-elements';
import { BlackCircle } from '../../../images/index.js';
import CustomIcon from '../../iconSet/customIcon.js';
import OmniHouseIcon from '../../../images/OmniHouseIcon.js';

const ServiceCardsWithIcon = (props) => {

    const handlePress = () => {
        props.onPress(props);
    } 

    return(
        <View style={[serviceCardsWithIconStyle.cardStyleContiner,
            {...(props.backgroundColor !== undefined
                && { backgroundColor: props.backgroundColor})}
        ]}>
            <TouchableOpacity style={serviceCardsWithIconStyle.cardStyle} onPress={handlePress}>
                    <View style={{width:48,height:48, borderRadius:24,backgroundColor:'#000', marginRight:10, justifyContent:'center',alignItems:'center'}}>
                    <OmniHouseIcon name={props.iconType} fill={props.fillColor} width={props.width} height={props.height}  />
                    
                    </View>
                    <Text style={serviceCardsWithIconStyle.textContainerStyle}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
} 


const serviceCardsWithIconStyle = StyleSheet.create({
    cardStyleContiner:{
        marginBottom: 15,
        flex: 1,
        borderRadius: 10,
        padding:10
    },
    cardStyle:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        flexDirection:'row'
    },
    textContainerStyle:{
        color:'#000', 
        fontSize: 16,
    }
});

export default ServiceCardsWithIcon;