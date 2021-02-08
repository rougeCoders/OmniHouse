import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import IconButton from './../../../cards/iconButton/index.js';
import constants from './../../../../constants.js';
import styles from './forms.Style.js';
import { useDispatch, useSelector } from 'react-redux';
import { typeOfProperty } from '../../../../store/actions/addPropertyAction.js';

const Screen5 = (props) => {

    
    const [propertyType, setPropertyType] = useState();
    const [occupationType, setOccupationType] = useState();
    const dispatch = useDispatch();

    const handlePropertyTypeSelection = (content) => {
        setPropertyType(content);
    }

    const handleOccupationTypeSelection = (content) => {
        setOccupationType(content);
    }

    const handleSubmit = () => {
        dispatch(typeOfProperty(occupationType));
        props.navigation.navigate('Screen6');
    }

    const propertyTypeData = [
        {
            index:1,
            title: constants.PropertyType.Studio,
            value: constants.PropertyType.Studio,
            icon: {type: 'ionicons', name: 'home'},
        },
        {
            index:2,
            title: constants.PropertyType.Flat,
            value: constants.PropertyType.Flat,
            icon: {type: 'ionicons', name: 'home'},
        },
        {
            index:3,
            title: constants.PropertyType.DetachedHouse,
            value: constants.PropertyType.DetachedHouse,
            icon: {type: 'ionicons', name: 'home'},
        },
        {
            index:4,
            title: constants.PropertyType.SemiDetachedHouse,
            value: constants.PropertyType.SemiDetachedHouse,
            icon: {type: 'ionicons', name: 'home'},
        },
        {
            index:5,
            title: constants.PropertyType.TerracedHouse,
            value: constants.PropertyType.TerracedHouse,
            icon: {type: 'ionicons', name: 'home'},
        },
        {
            index:6,
            title: constants.PropertyType.Other,
            value: constants.PropertyType.Other,
            icon: {type: 'ionicons', name: 'home'},
        }
      ];

    const occupationTypeData = [
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

    return (
        <View  style={styles.formContainer}>
        <View style={{padding:'10%'}}>
            <Text h4 style={styles.headText}>What type of property is it?</Text>
            <FlatList
                style={{alignSelf:'center', marginBottom:25}}
                data={propertyTypeData}
                renderItem={({ item }) => 
                    <IconButton title={item.title}
                        value={item.value}  
                        icon={item.icon}
                        buttonPress={handlePropertyTypeSelection}
                        {...(propertyType === item.value && { backgroundColor: 'purple'})}
                    />}
                keyExtractor={item => item.index}
                numColumns={2}
                />

                <Text h4 style={styles.headText}>Is the property an HMO (House in Multiple Occupation)</Text>

                <FlatList
                    style={{alignSelf:'center', marginBottom:25}}
                    data={occupationTypeData}
                    renderItem={({ item }) => 
                        <IconButton title={item.title}
                            value={item.value}
                            buttonPress={handleOccupationTypeSelection}
                            {...(occupationType === item.value && { backgroundColor: 'purple'})}
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

export default Screen5;