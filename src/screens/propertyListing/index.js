import React, { useState } from 'react';
import { View, ScrollView, Modal } from "react-native";
import { Text, Button } from 'react-native-elements';
import AddPropertyForm from '../../components/forms/addProperty/addProperty';
import styles from './propertyListing.style.js';
import PropertyCard from './../../components/cards/propertyCard/index.js';
import image from './../../assets/logo.png';

const PropertyListing = (props) => {

    const [modalVisible, setModalVisible] = useState(false);
    
    const handleCloseCallback = () => {
        setModalVisible(false);
    }
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
            <ScrollView>
                {
                    getproperties.map((property, index) => (
                        <PropertyCard key={index} {...property}/>
                    ))}
            </ScrollView>
            <Button style={styles.buttonBottom} title="Add Property" onPress={() => setModalVisible(true)} />
            <View>
                <Modal 
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}
                    onRequestClose={handleCloseCallback}>
                    <AddPropertyForm handleCallback={handleCloseCallback} />
                </Modal>    
            </View>
        </View>
    )
}

export default PropertyListing;