import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import IconButton from './../../../cards/iconButton/index.js';
import constants from './../../../../constants.js';
import styles from './forms.Style.js';
import { useDispatch, useSelector } from 'react-redux';
import { propertyFurnished } from '../../../../store/actions/addPropertyAction.js';
import OmniHouseTheme from '../../../../styles/theme.js';

const Screen6 = (props) => {

    const [propertyFurnishing, setPropertyFurnishing] = useState(useSelector(state => state.addProperty.propertyFurnishing));

    const handlePropertyFurnishingSelection = (content) => {
        setPropertyFurnishing(content);
    }
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(propertyFurnished(propertyFurnishing))
        props.navigation.navigate('Screen7');
    }

    const propertyFurnishingData = [
        {
            index:1,
            title: constants.FurnishingType.Furnished,
            value: constants.FurnishingType.Furnished,
            icon: {type: 'ionicons', name: 'home'},
        },
        {
            index:2,
            title: constants.FurnishingType.PartFurnished,
            value: constants.FurnishingType.PartFurnished,
            icon: {type: 'ionicons', name: 'home'},
        },
        {
            index:3,
            title: constants.FurnishingType.Unfurnished,
            value: constants.FurnishingType.Unfurnished,
            icon: {type: 'ionicons', name: 'home'},
        }
      ]

    return (
        <View style={styles.formContainer}>
            <View style={{padding:'10%'}}>
            <Text h4 style={styles.headText}>How is the property furnished?</Text>
            <FlatList
                style={styles.flatListContainer}
                data={propertyFurnishingData}
                renderItem={({ item }) => 
                    <IconButton title={item.title}
                    value={item.value}
                    icon={item.icon}
                    buttonPress={handlePropertyFurnishingSelection}
                    {...(propertyFurnishing === item.value &&
                        { backgroundColor: OmniHouseTheme.palette.primary.vector})} />}
                keyExtractor={item => item.index}
                numColumns={3}
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

export default Screen6;