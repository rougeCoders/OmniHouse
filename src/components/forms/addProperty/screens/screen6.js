import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';

const Screen6 = (props) => {

    const handleSubmit = () => {
        props.nextStep({step: props.propertyDetails.step + 1});
    }

    return (
        <View>
            <Button buttonStyle={{marginTop:10}} title="Next" onPress={() => handleSubmit}/>
        </View>
    )
}

export default Screen6;