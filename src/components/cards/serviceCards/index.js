import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity,StyleSheet } from "react-native";
import { Text } from 'react-native-elements';

const ServiceCards = (props) => {

    const handlePress = () => {
        props.onPress(props);
    } 

    return(
        <View style={[serviceCardsStyle.cardStyleContiner,
            {...(props.backgroundColor !== undefined
                && { backgroundColor: props.backgroundColor})},
                (props.index%2 ==0) ? serviceCardsStyle.marginRightContainer : serviceCardsStyle.marginLeftContainer
        ]}>
            <TouchableOpacity style={serviceCardsStyle.cardStyle} onPress={handlePress}>
                    <Text style={serviceCardsStyle.textContainerStyle}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}      

const serviceCardsStyle = StyleSheet.create({
    cardStyleContiner:{
        height:110, 
        marginBottom: 15,
        flex: 1,
        borderRadius: 10
    },
    marginLeftContainer:{
        marginRight:7.5
    },
    cardStyle:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    marginRightContainer:{
        marginLeft: 7.5
    },
    textContainerStyle:{
        color:'#000', 
        fontSize: 16, 
        textAlign:'center'
    }
});

export default ServiceCards;