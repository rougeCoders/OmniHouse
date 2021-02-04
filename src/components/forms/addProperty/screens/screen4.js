import React, { useState } from 'react';
import { View,FlatList,ScrollView,TouchableOpacity } from 'react-native';
import { Text, Button,Icon } from 'react-native-elements';
import IconButton from './../../../cards/iconButton/index.js';
import constants from './../../../../constants.js';
import styles from './forms.Style.js';
import CalendarPicker from 'react-native-calendar-picker';

const Screen4 = (props) => {

    const [isNotOccupied, setIsNotOccupied] = useState(false);
    const [isTenants, setIsTenants] = useState('');
    const [showCalendar, setShowCalendar] = useState(false);

    const handleTenantSelection = (content) => {
        setIsTenants(content);
        if(content == constants.Labels.Yes){
            setIsNotOccupied(false);
        }else{
            setIsNotOccupied(true);
        }
    }

    const handleSubmit = () => {
        props.nextStep({isNotOccupied: isNotOccupied, step: props.propertyDetails.step + 1});
    }

    const onDateChange = (date) => {

    }

    const propertyTypeData = [
        {
            index:1,
            title: constants.Labels.Yes,
            value: constants.Labels.Yes,
            icon: {},
        },
        {
            index:2,
            title: constants.Labels.No,
            value: constants.Labels.No,
            icon: {},
        }
    ];

    return (
        <View style={styles.formContainer}>
            <ScrollView style={{padding:'10%'}}>
                <Text h4>Do you currently have tenants?</Text>
                <FlatList
                    style={{alignSelf:'center', marginBottom:2 ,padding : 20}}
                    data={propertyTypeData}
                    renderItem={({ item }) => 
                        <IconButton title={item.title}
                            value={item.value}  
                            icon={item.icon}
                            buttonPress={handleTenantSelection}
                            {...(isTenants === item.value && { backgroundColor: 'purple'})}
                        />}
                    keyExtractor={item => item.index}
                    numColumns={2}
                />
                
                
                    { isNotOccupied && (
                        <View style={{marginBottom:20}}>
                            <Text style={{marginBottom:20, fontSize: 20}}>When is property available for rent?</Text>
                            <TouchableOpacity
                                onPress={() => setShowCalendar(true)}
                                style={{backgroundColor: "#DDDDDD", padding: 20, marginBottom: 20, flexDirection: 'row', alignItems: 'center'}}>
                                    <Icon
                                    name='calendar'
                                    type= 'ionicon'
                                    color='#517fa4'
                                    />
                                    <Text style={[styles.appButtonText,{marginLeft:10, fontSize: 16}]}>Please select date</Text>
                            </TouchableOpacity>
                            
                            { showCalendar && (
                                <CalendarPicker
                                 onDateChange={onDateChange}
                                />
                            )}
                        </View>
                    )}
                

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

            </ScrollView>
        </View>
    )
}

export default Screen4;