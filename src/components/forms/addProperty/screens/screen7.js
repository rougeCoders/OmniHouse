import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Text, Input, Icon, Button } from 'react-native-elements';
import constants from '../../../../constants.js';
import styles from './forms.Style.js';
import { useDispatch, useSelector } from 'react-redux';
import { addPropertyRentalDetails } from '../../../../store/actions/addPropertyAction.js';
import OmniHouseTheme from '../../../../styles/theme.js';

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
                    style={styles.inputBox}
                    onChangeText={(text) => setAmount(text)}
                    value={amount} />

                <FlatList
                    style={{alignSelf:'center', marginBottom:25}}
                    data={frequencyData}
                    renderItem={({ item }) => 
                        <TouchableOpacity 
                            style={[styles.selectableLabel,
                                {...( item.value === frequency
                                    && { backgroundColor: OmniHouseTheme.palette.primary.vector})}]}
                            onPress={() => setFrequency(item.value)}
                            ><Text h5 style={styles.baseText}>{item.title}</Text>
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
                            size={OmniHouseTheme.spacing(4)}
                            color={OmniHouseTheme.palette.primary.font}
                        />
                    }
                iconRight
                type="clear"
                titleStyle={styles.nextButtonTitle}
                buttonStyle={styles.nextButton}
                title="Next"
                onPress={handleSubmit}/>
            </View>
            </View>
        </View>
    )
}

export default Screen7;