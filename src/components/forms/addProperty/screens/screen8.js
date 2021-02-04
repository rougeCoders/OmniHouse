import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import IconButton from '../../../cards/iconButton/index.js';
import constants from '../../../../constants.js';
import styles from './forms.Style.js';

const Screen8 = (props) => {

    const [billsIncluded, setBillsIncluded] = useState(props.propertyDetails.billsIncluded);

    const handleBillIncludedSelection = (content) => {
        setBillsIncluded(content);
    }

    const handleSubmit = () => {
        props.nextStep({billsIncluded: billsIncluded,
            step: props.propertyDetails.step + 1});
    }

    const billsIncludedData = [
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
            <Text h4 style={styles.headText}>Are bills included in the rental price?</Text>

            <FlatList
                style={{alignSelf:'center', marginBottom:25}}
                data={billsIncludedData}
                renderItem={({ item }) => 
                    <IconButton title={item.title}
                        value={item.value}
                        buttonPress={handleBillIncludedSelection}
                        {...(billsIncluded === item.value && { backgroundColor: 'purple'})}
                    />}
                keyExtractor={item => item.index}
                numColumns={2}
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

export default Screen8;