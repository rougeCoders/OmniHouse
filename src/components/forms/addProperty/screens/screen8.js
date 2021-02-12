import React, { useState } from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import IconButton from '../../../cards/iconButton/index.js';
import constants from '../../../../constants.js';
import styles from './forms.Style.js';
import { addPropertyBillDetails } from '../../../../store/actions/addPropertyAction.js';
import { useDispatch, useSelector } from 'react-redux';
import OmniHouseTheme from '../../../../styles/theme.js';

const Screen8 = (props) => {

    const dispatch = useDispatch();
    const rentDetails = useSelector(state => state.addProperty.propertyRentalDetails);

    const [billsIncluded, setBillsIncluded] = useState(rentDetails.billsIncluded);
    const [billsList, setBillsList] = useState(rentDetails.bills);

    const handleBillIncludedSelection = (content) => {
        setBillsIncluded(content);
    }  

    const handleBillSelection = (content) => {  
        const indexNo = billsList.indexOf(content);
        if(indexNo >= 0)
        {
            billsList.splice(indexNo, 1);
        }
        else
        {
            billsList.push(content);
        }
        
        setBillsList(billsList);
    }

    const handleSubmit = () => {
        rentDetails.billsIncluded = billsIncluded;
        rentDetails.bills = billsList;
        dispatch(addPropertyBillDetails(rentDetails))
        props.navigation.navigate('Screen9');
    }

    const billsIncludedData = [
        {
            index:1,
            title: 'YES',
            value: true,
        },
        {
            index:2,
            title: 'NO',
            value: false,
        },
    ];

    const billsListData = [
        {
            index:1,
            title: constants.BillTypes.Electricity,
            value: constants.BillTypes.Electricity,
        },
        {
            index:2,
            title: constants.BillTypes.Gas,
            value: constants.BillTypes.Gas,
        },
        {
            index:3,
            title: constants.BillTypes.Water,
            value: constants.BillTypes.Water,
        },
        {
            index:4,
            title: constants.BillTypes.Internet,
            value: constants.BillTypes.Internet,
        },
        {
            index:5,
            title: constants.BillTypes.TVLicense,
            value: constants.BillTypes.TVLicense,
        },
        {
            index:6,
            title: constants.BillTypes.Other,
            value: constants.BillTypes.Other,
        }
    ];

    

    return (
        <View style={styles.formContainer}>
        <ScrollView style={{padding:'10%'}}>
            <Text h4 style={styles.headText}>Are bills included in the rental price?</Text>

            <FlatList
                style={styles.flatListContainer}
                data={billsIncludedData}
                renderItem={({ item }) => 
                    <IconButton title={item.title}
                        value={item.value}
                        onPress={handleBillIncludedSelection}
                        {...(billsIncluded === item.value &&
                            { backgroundColor: OmniHouseTheme.palette.primary.vector})}
                    />}
                keyExtractor={item => item.index}
                numColumns={2}
                />

            {  billsIncluded === true && (
                
                <>
                <Text h4 style={styles.headText}>Which ones?</Text>
                <View style={{marginBottom:40}}>
                {
                    billsListData.map((item, index) => (
                        <IconButton key={index} title={item.title}
                            FlatButton
                            value={item.value}
                            onPress={handleBillSelection}
                            {...(billsList.indexOf(item.value) >= 0 && { backgroundColor: 'purple'})}
                        />)
                )}
                </View>
                </>
            )}
        </ScrollView>
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
    )
}

export default Screen8;