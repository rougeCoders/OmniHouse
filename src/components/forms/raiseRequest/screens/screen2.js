import React, { useState } from 'react';
import { View,FlatList,StyleSheet,TouchableOpacity } from 'react-native';
import { Text, Input, Button, Icon } from 'react-native-elements';
import constants from './../../../../constants.js';
import styles from './raiseRequest.style.js';
import ServiceCards from './../../../cards/serviceCards/index.js';
import ServiceCardsWithIcon from './../../../cards/serviceCardsWithIcon/index.js';

const Screen2 = (props) => {
    let selectedService = props.route.params.response;

    const [selectedServiceSubType, setSelectedServiceSubType] = useState('');

    const handleSelectedServiceSubTypeSelection = (content) => {
        setSelectedServiceSubType(content.value);
    }

    console.log(selectedService);

    return (
        <View style={{padding:'10%', marginBottom:20, width:'100%'}}>
            
            { selectedService.layoutType == "Grid" && (
                    <FlatList
                        ListHeaderComponent={
                            <Text h3 style={{color:'#fff',marginBottom: 20}}>{selectedService.headingTitle}</Text>
                        }
                        style={[styles.flatListContainer]}
                        data={selectedService.items}
                        contentContainerStyle = {{flexGrow: 1, justifyContent: 'center'}}
                        renderItem={({ item,index }) => (
                            <ServiceCards title={item.title}
                                index = {index}
                                {...item}
                                onPress={handleSelectedServiceSubTypeSelection}
                                {...(selectedServiceSubType === item.value &&
                                { backgroundColor: OmniHouseTheme.palette.primary.vector})}
                            />)}
                        keyExtractor={item => item.index}
                        numColumns={2}
                        ListFooterComponent={
                            <TouchableOpacity
                                style={screeen2Style.nextButton}>
                                <Text style={{color:'#000', fontSize: 16}}>Other</Text>
                            </TouchableOpacity>
                        }
                    />
            )}
            { selectedService.layoutType == "Stack" && (
                
                    <FlatList
                        ListHeaderComponent={
                            <Text h3 style={{color:'#fff',marginBottom: 20}}>{selectedService.headingTitle}</Text>
                        }
                        style={[styles.flatListContainer]}
                        data={selectedService.items}
                        contentContainerStyle = {{flexGrow: 1, justifyContent: 'center'}}
                        renderItem={({ item,index }) => (
                            <ServiceCardsWithIcon title={item.title}
                                index = {index}
                                {...item}
                                onPress={handleSelectedServiceSubTypeSelection}
                                {...(selectedServiceSubType === item.value &&
                                { backgroundColor: OmniHouseTheme.palette.primary.vector})}
                            />)}
                        keyExtractor={item => item.index}
                        numColumns={1}
                        ListFooterComponent={
                            <TouchableOpacity
                                style={screeen2Style.nextButton}>
                                <Text style={{color:'#000', fontSize: 16}}>Other</Text>
                            </TouchableOpacity>
                        }
                    />
            )}  
        </View>
    )
}

const screeen2Style = StyleSheet.create({
    nextButton:{
        width:'100%',
        backgroundColor: "#A75DD4", 
        padding: 15,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:20,
        marginTop: 20
    }
})
export default Screen2;