import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import IconButton from './../../../cards/iconButton/index.js';
import constants from './../../../../constants.js';
import styles from './forms.Style.js';

const Screen5 = (props) => {

    const [propertyType, setPropertyType] = useState('');

    const handlePropertyTypeSelection = (content) => {
        setPropertyType(content);
    }

    const handleSubmit = () => {
        props.nextStep({propertyType: propertyType,
            step: props.propertyDetails.step + 1});
    }

    const propertyTypeData = [
        {
            index:1,
            title: constants.PropertyType.Studio,
            icon: {type: 'ionicons', name: 'home'},
        },
        {
            index:2,
            title: constants.PropertyType.Flat,
            icon: {type: 'ionicons', name: 'home'},
        },
        {
            index:3,
            title: constants.PropertyType.DetachedHouse,
            icon: {type: 'ionicons', name: 'home'},
        },
        {
            index:4,
            title: constants.PropertyType.SemiDetachedHouse,
            icon: {type: 'ionicons', name: 'home'},
        },
        {
            index:5,
            title: constants.PropertyType.TerracedHouse,
            icon: {type: 'ionicons', name: 'home'},
        },
        {
            index:6,
            title: constants.PropertyType.Other,
            icon: {type: 'ionicons', name: 'home'},
        }
      ]

    return (
        <View  style={styles.formContainer}>
        <View style={{padding:'10%'}}>
            <Text h4 style={styles.headText}>What type of property is it?</Text>
            <FlatList
                data={propertyTypeData}
                renderItem={({ item }) => 
                    <IconButton title={item.title}
                    icon={item.icon}
                    buttonPress={handlePropertyTypeSelection} />}
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