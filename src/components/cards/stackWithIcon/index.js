import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity,StyleSheet } from "react-native";
import { Image, Text,Icon } from 'react-native-elements';
import { BlackCircle } from '../../../images/index.js';
import CustomIcon from '../../iconSet/customIcon.js';
import OmniHouseIcon from '../../../images/OmniHouseIcon.js';
import LinearGradient from 'react-native-linear-gradient'

const StackWithIcon = (props) => {

    const handlePress = () => {
        props.onPress(props);
    } 

    return(
        <LinearGradient
                    colors={props.backgroundColorGradient}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 0.94, y: 0.5 }}
                    style={{marginBottom:15,borderRadius:10}}
                    >
            <View style={[stackWithIconStyle.cardStyleContiner,
                {...(props.backgroundColor !== undefined
                    && { backgroundColor: props.backgroundColor})}
            ]}>
                <TouchableOpacity style={{width:'100%'}} onPress={handlePress}>
                    <Text style={[stackWithIconStyle.textAreaContainer,{
                        fontWeight:'bold',
                        fontSize:20
                    }]}>{props.title}</Text>
                    <Text style={[stackWithIconStyle.textAreaContainer,{
                        marginLeft:5
                    }]}>{props.subTitle}</Text>
                    <Text style={[stackWithIconStyle.textAreaContainer,{
                        marginLeft:5
                    }]}>{props.description}</Text>
                    <Text style={[stackWithIconStyle.textAreaContainer,{
                        marginLeft:5
                    }]}>{props.dateText}</Text>
                    <View style={[
                        {...(props.backgroundIconColor !== undefined
                            && { backgroundColor: props.backgroundIconColor})},
                            stackWithIconStyle.iconContainer
                    ]}>
                        <OmniHouseIcon name={props.iconType} fill={props.fillColor} width={props.iconWidth} height={props.iconHeight}  />
                    </View>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
} 


const stackWithIconStyle = StyleSheet.create({
    cardStyleContiner:{
        padding:10
    },
    textAreaContainer:{
        color:'#FFF',
        marginBottom:5
    },
    iconContainer:{
        position:'absolute',
        top:0, 
        right:0,
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:6
    }
});

export default StackWithIcon;