import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import IconButton from '../../../cards/iconButton/index.js';
import CircleButton from '../../../cards/circleButton/index.js';
import constants from '../../../../constants.js';
import styles from './forms.Style.js';
import { useDispatch, useSelector } from 'react-redux';
import { securityDepositDetails } from '../../../../store/actions/addPropertyAction.js';

const Screen9 = (props) => {

    const dispatch = useDispatch();

    const rentDetails = {};
    const [isZeroDepositScheme, setIsZeroDepositScheme] = useState(rentDetails.isZeroDepositScheme);
    const [depositDuration, setDepositDuration] = useState(1);

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
        dispatch(securityDepositDetails(rentDetails))
        props.navigation.navigate('Screen10');
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
                <View style={{flexDirection:'row', alignItems:'center', alignSelf:'center'}}>
                    <CircleButton 
                        value={depositDuration === 1? depositDuration : depositDuration - 1}
                        icon={{type: 'ionicons', name: 'remove'}}
                        {...(depositDuration === 1 && { disabled: true })}
                        buttonPress={handleDepositDurationSelection}/>
                    <Text h4>{depositDuration}</Text>
                    <CircleButton
                        value={depositDuration + 1}
                        icon={{type: 'ionicons', name: 'add'}}
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

export default Screen9;