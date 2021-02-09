import React, { useState } from 'react';
import { View,FlatList,ScrollView,TouchableOpacity,Dimensions,StyleSheet } from 'react-native';
import { Text, Button,Icon } from 'react-native-elements';
import IconButton from './../../../cards/iconButton/index.js';
import constants from './../../../../constants.js';
import styles from './forms.Style.js';
import CalendarPicker from 'react-native-calendar-picker';
import { useDispatch, useSelector } from 'react-redux';
import { isPropertyNotOccupied } from '../../../../store/actions/addPropertyAction.js';

const Screen4 = (props) => {

    const width = Dimensions.get('window').width; 
    const [isNotOccupied, setIsNotOccupied] = useState(false);
    const [isTenants, setIsTenants] = useState('');
    const [showCalendar, setShowCalendar] = useState(false);
    const [adjustedWidth, setAdjustedwidth] = useState(width - (20/100*width));
    

    const dispatch = useDispatch();

    const handleTenantSelection = (content) => {
        setIsTenants(content);
        if(content == constants.Labels.Yes){
            setIsNotOccupied(false);
        }else{
            setIsNotOccupied(true);
        }
    }

    const handleSubmit = () => {
        dispatch(isPropertyNotOccupied(isNotOccupied))
        props.navigation.navigate('Screen5');
    }

    const onDateChange = (date) => {

    }

    Dimensions.addEventListener('change', () => {
        const windowwidth = Dimensions.get('window').width;
        setAdjustedwidth( windowwidth - (20/100*windowwidth));
    });
   
    const propertyTypeData = [
        {
            index:1,
            title: constants.Labels.Yes,
            value: constants.Labels.Yes,
        },
        {
            index:2,
            title: constants.Labels.No,
            value: constants.Labels.No,
        }
    ];

    return (
        
        <ScrollView contentContainerStyle={isTenantScreen.containerStyle}>
            <View style={isTenantScreen.containerChildStyle}>
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
                        <View style={{marginBottom:20, width: '100%'}}>
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
                                 width = {adjustedWidth}
                                 headerWrapperStyle ={{
                                     width: '100%'
                                 }}
                                />
                            )}
                            <Text>We will post your completed property on our listing portal all year round to help you avoid the tenant void!</Text>
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
            </View>
        </ScrollView>
    )
}

const isTenantScreen = StyleSheet.create({
    containerStyle:{
        justifyContent:'center', 
        flexGrow:1
    },
    containerChildStyle:{
        padding: '10%',
        marginBottom:25 
    }
});
 


export default Screen4;