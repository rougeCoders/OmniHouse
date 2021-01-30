import React, { useState } from 'react';
import { View, ScrollView, Modal } from "react-native";
import { Text, Icon, Button } from 'react-native-elements';
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
            <View style={styles.searchTab}>
                    <Icon
                        name='search'
                        type='materialicons'
                        color='#517fa4'
                        size={30}
                        iconStyle={{marginRight:15}}
                    />
                    <Icon
                        name='more-vert'
                        type='materialicons'
                        color='#517fa4'
                        size={30}
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
                    onRequestClose={handleCloseCallback}>
                    <AddPropertyForm handleCallback={handleCloseCallback} />
                </Modal>    
            </View>
        </View>
    )
}

export default PropertyListing;