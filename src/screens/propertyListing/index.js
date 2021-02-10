import React, { useState } from 'react';
import { View, ScrollView, Modal } from "react-native";
import { Text, Icon, Button } from 'react-native-elements';
import styles from './propertyListing.style.js';
import PropertyCard from './../../components/cards/propertyCard/index.js';
import image from './../../assets/logo.png';
import AddPropertyNavigator from '../../navigation/addProperty.js';
import OmniHouseTheme from '../../styles/theme.js';

const PropertyListing = (props) => {

    const [modalVisible, setModalVisible] = useState(false);
    
    const handleCloseCallback = () => {
        setModalVisible(false);
    }
    const disableBackButton = () => {}

    const getproperties = [
        {
            ImageUri:image,
            Address:'Test Address 1',
            PerCompleted:28,
            Notifications:4
        },
        {
            ImageUri:image,
            Address:'Test Address 2',
            PerCompleted:56,
            Notifications:0
        }
    ];
    
    return(
        <View style={styles.container}>
            <Text h2 style={styles.headingText}>My properties</Text>
            <View style={styles.searchTab}>
                    <Icon
                        name='search'
                        type='materialicons'
                        color={OmniHouseTheme.palette.icons.main}
                        size={OmniHouseTheme.spacing(4)}
                        iconStyle={{marginRight:OmniHouseTheme.spacing(2)}}
                    />
                    <Icon
                        name='more-vert'
                        type='materialicons'
                        color={OmniHouseTheme.palette.icons.main}
                        size={OmniHouseTheme.spacing(4)}
                    />
            </View>
            <ScrollView>
                {
                    getproperties.map((property, index) => (
                        <PropertyCard key={index} {...property}/>
                ))}
            </ScrollView>
            <View style={styles.addProp}>
                <Button buttonStyle={styles.buttonBottom}
                    icon={
                        <Icon
                          name='add'
                          type='ionicons'
                          size={30}
                          color="white"
                        />
                    }
                    title="ADD A PROPERTY"
                    onPress={() => setModalVisible(true)} />
            </View>
            <View>
                <Modal 
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}
                    onRequestClose={disableBackButton}>
                    <AddPropertyNavigator handleCallback={handleCloseCallback}/>
                </Modal>    
            </View>
        </View>
    )
}

export default PropertyListing;