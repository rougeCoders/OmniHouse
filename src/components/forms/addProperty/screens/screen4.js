import React, { useState } from 'react';
import { View,FlatList,ScrollView,TouchableOpacity,Dimensions,StyleSheet } from 'react-native';
import { Text, Button,Icon } from 'react-native-elements';
import IconButton from './../../../cards/iconButton/index.js';
import constants from './../../../../constants.js';
import styles from './forms.Style.js';
import CalendarPicker from 'react-native-calendar-picker';
import { useDispatch } from 'react-redux';
import { isPropertyNotOccupied } from '../../../../store/actions/addPropertyAction.js';
import OmniHouseTheme from '../../../../styles/theme.js';

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
            text:'I’m here for Omnihouse’s awsome property management tools',
        },
        {
            index:2,
            title: constants.Labels.No,
            value: constants.Labels.No,
            text:'Find me superior tenants',
        }
    ];

    return (
        
        <ScrollView contentContainerStyle={isTenantScreen.containerStyle}>
            <View style={isTenantScreen.containerChildStyle}>
                <Text h4 style={styles.headText}>Do you currently have tenants?</Text>
                <FlatList
                    style={styles.flatListContainer}
                    data={propertyTypeData}
                    renderItem={({ item }) => (
                        <IconButton title={item.title}
                            {...item}
                            buttonPress={handleTenantSelection}
                            {...(isTenants === item.value &&
                                { backgroundColor: OmniHouseTheme.palette.primary.vector})}
                        />)}
                    keyExtractor={item => item.index}
                    numColumns={2}
                />
                 
                    { isNotOccupied && (
                        <View style={{marginBottom:20, width: '100%'}}>
                            <Text h4 style={styles.headText}>When is property available for rent?</Text>
                            <TouchableOpacity
                                onPress={() => setShowCalendar(true)}
                                style={styles.calenderButtonContainer}>
                                    <Icon
                                    name='today'
                                    type= 'ionicons'
                                    color= {OmniHouseTheme.palette.primary.font}
                                    />
                                    <Text h5 style={styles.calenderText}>Please select date</Text>
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
                            <Text style={styles.headText}>We will post your completed property on our listing portal all year round to help you avoid the tenant void!</Text>
                        </View>
                    )}
                

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