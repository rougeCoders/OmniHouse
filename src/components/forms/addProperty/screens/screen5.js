import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import constants from './../../../../constants.js';

const Screen5 = (props) => {

    const [propertyType, setPropertyType] = useState('');
    const [propertyFurnishing, setPropertyFurnishing] = useState('');

    const handleSubmit = () => {
        props.nextStep({propertyType: propertyType,
            propertyFurnishing: propertyFurnishing,
            step: props.propertyDetails.step + 1});
    }

    return (
        <View>
            <Text h4>What type of property is it?</Text>
            <Button title={constants.PropertyType.Studio} 
                onPress={()=> setPropertyType(constants.PropertyType.Studio)}/>
            <Button title={constants.PropertyType.Flat} 
                onPress={()=> setPropertyType(constants.PropertyType.Flat)}/>
            <Button title={constants.PropertyType.DetachedHouse} 
                onPress={()=> setPropertyType(constants.PropertyType.DetachedHouse)}/>
            <Button title={constants.PropertyType.SemiDetachedHouse} 
                onPress={()=> setPropertyType(constants.PropertyType.SemiDetachedHouse)}/>
            <Button title={constants.PropertyType.TerracedHouse} 
                onPress={()=> setPropertyType(constants.PropertyType.TerracedHouse)}/>
            <Button title={constants.PropertyType.Other} 
                onPress={()=> setPropertyType(constants.PropertyType.Other)}/>

            <Button buttonStyle={{marginTop:20}} 
                title={constants.FurnishingType.Furnished}
                onPress={() => setPropertyFurnishing(constants.FurnishingType.Furnished)}/>
            <Button title={constants.FurnishingType.PartFurnished}
                onPress={() => setPropertyFurnishing(constants.FurnishingType.PartFurnished)}/>
            <Button title={constants.FurnishingType.Unfurnished}
                onPress={() => setPropertyFurnishing(constants.FurnishingType.Unfurnished)}/>

            <Button buttonStyle={{marginTop:20}} title="Next" onPress={() => handleSubmit}/>
        </View>
    )
}

export default Screen5;