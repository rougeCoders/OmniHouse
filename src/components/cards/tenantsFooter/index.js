import React, { useState } from 'react';
import { View, TouchableOpacity,Dimensions } from "react-native";
import { Text, Button,Icon } from 'react-native-elements';
import CalendarPicker from 'react-native-calendar-picker';

const TenantsFooter = (props) => {

    const width = Dimensions.get('window').width; 
    const [adjustedWidth, setAdjustedwidth] = useState(width - (20/100*width));
    const [showCalendar, setShowCalendar] = useState(false);

    Dimensions.addEventListener('change', () => {
        const windowwidth = Dimensions.get('window').width;
        setAdjustedwidth( windowwidth - (20/100*windowwidth));
    });

    const onDateChange = () => {
    }

    return (
            <View style={{marginBottom:30}}>
            { props.isNotOccupied && (
                <View>
                    <Text style={[props.styles.headText,{marginTop:20,marginBottom:20}]}>When is property available for rent?</Text>
                    <TouchableOpacity
                        onPress={() => setShowCalendar(true)}
                        style={props.styles.calenderButtonContainer}>
                            <Icon
                            name='today'
                            type= 'ionicons'
                            color= {OmniHouseTheme.palette.primary.font}
                            />
                            <Text h5 style={props.styles.calenderText}>Please select date</Text>
                    </TouchableOpacity>
                    
                    { showCalendar && (
                        <CalendarPicker
                        onDateChange={onDateChange}
                        width = {adjustedWidth}
                        textStyle = {{
                            color:'#fff'
                        }}
                        />
                    )}
                    <Text style={[props.styles.headText, {marginTop:20}]}>We will post your completed property on our listing portal all year round to help you avoid the tenant void!</Text> 
                </View>
            )}
            <View style={props.styles.buttonContainer}>
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
                                    titleStyle={props.styles.nextButtonTitle}
                                    buttonStyle={props.styles.nextButton}
                                    title="Next"
                                    onPress={props.onHandleSubmit}/>
            </View>
        </View>
    )
}

export default TenantsFooter;