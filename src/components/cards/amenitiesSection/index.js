import React, { useState } from 'react';
import { View,TouchableWithoutFeedback,StyleSheet,Platform,UIManager,LayoutAnimation,TouchableOpacity } from "react-native";
import { Image, Text,Icon } from 'react-native-elements';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../selection.json';
import FitImage from 'react-native-fit-image';

const CustomIcon = createIconSetFromIcoMoon(
    icoMoonConfig
  );


const AmenitySection = (props) => {

    let selected = false;
    if(props.selectedItemAmenities && props.selectedItemAmenities[props.parentKey] && props.selectedItemAmenities[props.parentKey].indexOf(props.index)!=-1){
        selected = true;
    }
    const [selectedIcon, setSelectedIcon] = useState(selected);
    const amenityClick = () => {
        setSelectedIcon(!selectedIcon);
        props.onPress(props.index,props.parentKey,!selectedIcon);
    }

    return(
        <TouchableOpacity key={props.index} style={amenitiesSectionStyle.amenitiesSubSectionItemStyle} onPress={amenityClick}>
                                                <CustomIcon
                                                    name={selectedIcon ? 'Plus' : 'Minus'}
                                                    size={20}
                                                    color={selectedIcon ? '#51B64F' : '#D41553'}
                                                    style={{
                                                        position:'absolute',
                                                        top:-9,
                                                        right:-9
                                                    }}
                                                />
                                                <Image  
                                                    source={props.data.iconType}
                                                    style={{ width: props.data.width, height: props.data.height }}
                                                />
                                                <Text style={{color:'#fff',textAlign:'center'}}>{props.data.title}</Text>
        </TouchableOpacity>
    )
}

const amenitiesSectionStyle = StyleSheet.create({
    amenitiesSubSectionItemStyle:{
        flexDirection:'column', 
        alignItems:'center',
        flexBasis:'33.33%',
        marginBottom:10,
        marginTop:10,
        paddingTop:20,
        paddingBottom:25
    }
});
export default AmenitySection;
