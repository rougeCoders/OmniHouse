import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';

const Screen4 = (props) => {

    const [isOccupied, setIsOccupied] = useState(false);

    const handleSubmit = () => {
        props.nextStep({isOccupied: isOccupied, step: props.propertyDetails.step + 1});
    }

    return (
        <View>
            <Text h4>Do you currently have tenants?</Text>
            <Button title="I have tenants" onPress={()=> setIsOccupied(true)}/>
            <Button title="I don't have tenants" onPress={()=> setIsOccupied(false)}/>
            <Text style={{marginTop:30}}>When is porperty available for rent?</Text>
            <Button title="Calender" />
            <Button buttonStyle={{marginTop:10}} title="Next" onPress={() => handleSubmit}/>
        </View>
    )
}

export default Screen4;