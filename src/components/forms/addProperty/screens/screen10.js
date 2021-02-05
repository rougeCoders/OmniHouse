import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import IconButton from '../../../cards/iconButton/index.js';
import CircleButton from '../../../cards/circleButton/index.js';
import constants from '../../../../constants.js';
import styles from './forms.Style.js';

const Screen10 = (props) => {

    const rentDetails = props.propertyDetails.rentDetails;
    const [isZeroDepositScheme, setIsZeroDepositScheme] = useState(rentDetails.isZeroDepositScheme);
    const [depositDuration, setDepositDuration] = useState(rentDetails.depositDuration);

    const handleDepositSchemeSelection = (content) => {
        setIsZeroDepositScheme(content);
    }
    const handleDepositDurationSelection = (content) => {
        if(content !== depositDuration)
        {
            setDepositDuration(content);
        }
    }

    const handleSubmit = () => {
        props.nextStep({rentDetails: rentDetails,
            step: props.propertyDetails.step + 1});
    }

    const depositSchemeData = [
        {
            index:1,
            title: 'YES',
            value: true,
        },
        {
            index:1,
            title: 'NO',
            value: false,
        },
    ];

    return (
        <View  style={styles.formContainer}>
        <View style={{padding:'10%'}}>
            <Text h4 style={styles.headText}>Are you happy for the tenant to use a Zero Deposit Scheme? </Text>
            <FlatList
                style={{alignSelf:'center', marginBottom:25}}
                data={depositSchemeData}
                renderItem={({ item }) => 
                    <IconButton title={item.title}
                        value={item.value}
                        buttonPress={handleDepositSchemeSelection}
                        {...(isZeroDepositScheme === item.value && { backgroundColor: 'purple'})}
                    />}
                keyExtractor={item => item.index}
                numColumns={2}
                />

                <Text h4 style={styles.headText}>Otherwise, how many weeks of rent do you require for a Secuirty Deposit?</Text>
                <View>
                    <CircleButton 
                        value={depositDuration === 1? depositDuration : depositDuration - 1}
                        icon={{type: 'ionicons', name: 'home'}}
                        {...(depositDuration === 1 && { disabled })}
                        buttonPress={handleDepositDurationSelection}/>
                    <Text>{depositDuration}</Text>
                    <CircleButton
                        value={depositDuration + 1}
                        icon={{type: 'ionicons', name: 'home'}}
                        buttonPress={handleDepositDurationSelection}/>
                </View>

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

export default Screen10;