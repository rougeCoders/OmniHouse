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
                (props.index%2 ==0) ? serviceCardsStyle.marginRightContainer : serviceCardsStyle.marginLeftContainer,
                (props.count%2 !=0 && (props.index == props.count)) ? serviceCardsStyle.marginZero:""
        ]}>
            <TouchableOpacity style={[serviceCardsStyle.cardStyle, 
                {...props.textAlignmentVertical!== undefined  && props.textAlignmentVertical=="bottom" &&{justifyContent:'flex-end'}},
                {...props.textAlignmentHorizontal!== undefined  && props.textAlignmentHorizontal=="left" &&{alignItems:'flex-start'}}
            ]} onPress={handlePress}>
                    <Text style={[serviceCardsStyle.textContainerStyle,
                        {...props.fontColor !== undefined && {color: props.fontColor}},
                        {...props.textAlignmentHorizontal!== undefined  && props.textAlignmentHorizontal=="left" &&{ textAlign:'left'}}
                    ]}>{props.title}</Text>
                    { props.subTitle != undefined && (
                    <Text style={{position:'absolute',top:0,right:0, color:'#FFF'}}>{props.subTitle}</Text>
                    )}
            </TouchableOpacity>
        </View>
    )
}      

const serviceCardsStyle = StyleSheet.create({
    cardStyleContiner:{
        height:110, 
        marginBottom: 15,
        flex: 1,
        borderRadius: 10,
        padding:8
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
    },
    marginZero:{
        marginRight:0,
        marginLeft:0
    }
});

export default ServiceCards;