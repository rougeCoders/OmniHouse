import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity,StyleSheet } from "react-native";
import { Image, Text,Icon } from 'react-native-elements';
import { BlackCircle } from '../../../images/index.js';
import CustomIcon from '../../iconSet/customIcon.js';
import OmniHouseIcon from '../../../images/OmniHouseIcon.js';

const StackWithoutIcon = (props) => {

    const handlePress = () => {
        props.onPress(props);
    } 

    return(
        <View style={[stackWithoutIconStyle.cardStyleContiner,
            {...(props.backgroundColor !== undefined
                && { backgroundColor: props.backgroundColor})}
        ]}>
            <TouchableOpacity style={{width:'100%', flexDirection:'row', alignItems:'center'}} onPress={handlePress}>
                    <View style={{flexGrow:1}}>
                        <Text style={{color:'#FFF',fontWeight:'bold',fontSize:20}}>{props.title}</Text>
                    </View>
                    <View style={[
                        stackWithoutIconStyle.textAreaContainer,
                         {...(props.backgroundColor !== undefined
                            && { backgroundColor: props.backgroundIconColor})}
                    ]}>
                         <Text style={stackWithoutIconStyle.textAreaContainerTextStyle}>{props.subTitle}</Text>
                    </View>
                   
            </TouchableOpacity>
        </View>
    )
} 


const stackWithoutIconStyle = StyleSheet.create({
    cardStyleContiner:{
        padding:10,
        borderRadius:10,
        marginBottom:15
    },
    textAreaContainer:{
        borderRadius:6,
        paddingBottom:2,
        paddingTop:2,
        paddingLeft:6,
        paddingRight:6
    },
    textAreaContainerTextStyle:{
        fontSize:16,
        color:'#FFF'
    }
});

export default StackWithoutIcon;