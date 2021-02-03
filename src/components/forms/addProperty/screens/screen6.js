import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import IconButton from './../../../cards/iconButton/index.js';
import constants from './../../../../constants.js';
import styles from './forms.Style.js';

const Screen6 = (props) => {

    const [propertyFurnishing, setPropertyFurnishing] = useState('');

    const handlePropertyFurnishingSelection = (content) => {
        setPropertyFurnishing(content);
    }

    const handleSubmit = () => {
        props.nextStep({propertyFurnishing: propertyFurnishing,
            step: props.propertyDetails.step + 1});
    }
    console.log(props.propertyDetails);

    const propertyFurnishingData = [
        {
            index:1,
            title: constants.FurnishingType.Furnished,
            icon: {type: 'ionicons', name: 'home'},
        },
        {
            index:2,
            title: constants.FurnishingType.PartFurnished,
            icon: {type: 'ionicons', name: 'home'},
        },
        {
            index:3,
            title: constants.FurnishingType.Unfurnished,
            icon: {type: 'ionicons', name: 'home'},
        }
      ]

    return (
        <View style={styles.formContainer}>
            <View style={{padding:'10%'}}>
            <Text h4 style={styles.headText}>How is the property furnished?</Text>
            <FlatList
                data={propertyFurnishingData}
                renderItem={({ item }) => 
                    <IconButton title={item.title}
                    icon={item.icon}
                    buttonPress={handlePropertyFurnishingSelection} />}
                keyExtractor={item => item.index}
                numColumns={3}
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

export default Screen6;