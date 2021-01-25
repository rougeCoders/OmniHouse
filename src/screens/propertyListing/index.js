import React, { useState } from 'react';
import { View, ScrollView, Modal } from "react-native";
import { Text, Button } from 'react-native-elements';
import AddPropertyForm from '../../components/forms/addProperty/addProperty';
import styles from './propertyListing.style.js';

const PropertyListing = (props) => {

    const [modalVisible, setModalVisible] = useState(false);
    
    const handleCloseCallback = () => {
        setModalVisible(false);
    }

    return(
        <View style={styles.container}>
            <Text>Properties</Text>
            <ScrollView>

            </ScrollView>
            <Button style={styles.buttonBottom} title="Add Property" onPress={() => setModalVisible(true)} />
            <View>
                <Modal 
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(false);
                    }}>
                    <AddPropertyForm handleCallback = {handleCloseCallback} />
                </Modal>    
            </View>
        </View>
    )
}

export default PropertyListing;