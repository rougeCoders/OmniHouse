import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Text, Input, Icon, Button } from 'react-native-elements';
import constants from '../../../../constants.js';
import styles from './forms.Style.js';
import { useDispatch, useSelector } from 'react-redux';
import { addPropertyRentalDetails } from '../../../../store/actions/addPropertyAction.js';

const Screen7 = (props) => {

    const dispatch = useDispatch();
    const rentDetails = useSelector(state => state.addProperty.propertyRentalDetails);

    const [frequency, setFrequency] = useState(rentDetails.frequency);
    const [amount, setAmount] = useState(rentDetails.amount);

    const handleSubmit = () => {
        rentDetails.amount = amount;
        rentDetails.frequency = frequency;
        dispatch(addPropertyRentalDetails(rentDetails))
        props.navigation.navigate('Screen8');
    }

    const frequencyData = [
        {
            index:1,
            title: constants.RentFrequency.PerWeek,
            value: constants.RentFrequency.PerWeek,
        },
        {
            index:1,
            title: constants.RentFrequency.PerMonth,
            value: constants.RentFrequency.PerMonth,
        },
    ];

    return (
        <View  style={styles.formContainer}>
            <View style={{padding:'10%'}}>
                <Text h4 style={styles.headText}>Rental price?</Text>
                <Input placeholder='e.g. £ 1800 pcm'
                    onChangeText={(text) => setAmount(text)}
                    value={amount} />

                <FlatList
                    style={{alignSelf:'center', marginBottom:25}}
                    data={frequencyData}
                    renderItem={({ item }) => 
                        <TouchableOpacity 
                            style={{padding:3,
                                marginLeft:5,
                                marginRight:5,
                                backgroundColor: item.value === frequency?'purple':'black'}}
                            onPress={() => setFrequency(item.value)}
                            ><Text h5 style={{color:'white'}}>{item.title}</Text>
                        </TouchableOpacity>}
                    keyExtractor={item => item.index}
                    numColumns={2}
                    ItemSeparatorComponent={(<View><Text>|</Text></View>)}
                    />
                
                <View style={styles.buttonContainer}>
                <Button
                    icon={
                        <Icon
                            name='navigate-next'
                            type='materialicons'
                            size={30}
                            color="white"
                        />
                    }
                iconRight
                type="clear"
                titleStyle={{color:'white'}}
                buttonStyle={styles.nextButton}
                title="Next"
                onPress={handleSubmit}/>
            </View>
            </View>
        </View>
    )
}

export default Screen7;