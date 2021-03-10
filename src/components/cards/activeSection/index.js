import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity,StyleSheet,FlatList } from "react-native";
import { Text } from 'react-native-elements';
import OmniHouseIcon from '../../../images/OmniHouseIcon.js';

const ActiveSection = (props) => {

    const onStageClick = () => {
        props.onPress(props.value);
    } 

    return(
        <View style={(props.backGroundColor !== undefined
                && { backgroundColor: props.backGroundColor})}>
            {props.title && (
                <Text style={{color:'#fff', marginBottom:8}}>{props.title}</Text>
            )}
            {props.subTitle && (
                <Text style={{color:'#fff'}}>{props.subTitle}</Text>
            )}
            <FlatList
                data={props.activeStagesData}
                style={{marginTop:20, marginBottom:10}}
                listKey={item => item.index}
                renderItem={({ item,index }) => (
                    <View key={index} style={activeSectionStyle.parentContainerStyle}>
                        <TouchableOpacity style={activeSectionStyle.childContainerStyle} onPress={() => onStageClick(item)}>
                            <View style={activeSectionStyle.subChildContainerStyle}>
                                <View style={[activeSectionStyle.stageIconStyle,
                                    {backgroundColor: item.backGroundColor}
                                ]}>
                                        <OmniHouseIcon name={item.iconType} fill={item.fillColor} width={item.iconWidth} height={item.iconHeight}  />
                                </View>
                                <View style={activeSectionStyle.dashedBorder}>
                                </View>
                            </View>
                            <Text style={activeSectionStyle.textStyle}>{item.title}</Text>
                        </TouchableOpacity>
                    </View>
                )}
               keyExtractor={item => item.index}
               numColumns={4}
            />
        </View>
    )
} 

const activeSectionStyle = StyleSheet.create({
    parentContainerStyle:{
        flex:1
    },
    childContainerStyle:{
        alignItems:'center'
    },
    subChildContainerStyle:{
        position:'relative',
        width:'100%',
        alignItems:'center'
    },
    stageIconStyle:{
        width:40, 
        height:40,
        borderRadius:20, 
        justifyContent:'center', 
        alignItems:'center',
        zIndex:1
    },
    dashedBorder:{
        width:'100%',
        borderBottomColor:'#594C56',
        borderBottomWidth:3,
        position:'absolute',
        top:'50%', 
        zIndex: 0, 
        transform:[
            {translateY:-1.5}
        ]
    },
    textStyle:{
        color:'#fff', 
        marginTop: 5, 
        fontSize: 12
    }
})

export default ActiveSection;