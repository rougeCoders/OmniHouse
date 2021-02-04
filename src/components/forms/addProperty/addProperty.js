import React, { useState } from 'react';
import { View, TouchableOpacity, Animated } from "react-native";
import { Header, Icon, Button } from 'react-native-elements';
import styles from './addProperty.style.js';
import Screen1 from './screens/screen1.js';
import Screen2 from './screens/screen2.js';
import Screen3 from './screens/screen3.js';
import Screen4 from './screens/screen4.js';
import Screen5 from './screens/screen5.js';
import Screen6 from './screens/screen6.js';

const AddPropertyForm = (props) => {

    const defaultState = {
        step: 1,
        addressLine1: '',
        addressLine2: '',
        city: '',
        postcode:'',
        monthlyRent:'',
        isOccupied: false,
        propertyType:'',
        propertyFurnishing:'',
        billsIncluded:false,
        bills:[],
    };

    const [propertyState, setPropertyState] = useState(defaultState);
    const screensCount = 8;

    const BackButton = () => {
        return(
            <Button
                icon={
                    <Icon
                      name='navigate-before'
                      type='materialicons'
                      size={30}
                      color="white"
                    />
                }
                title="Back"
                onPress={handleBackPress} />
        )
    }

    const ProgressBar = () => {

        const perDone = (propertyState.step * 100)/screensCount;

        return (
            <View style={{flexDirection:'row'}}>
                        <View style={styles.progrssBarContainer}>
                            <Animated.View style={[styles.progressBar,
                                {width: perDone + '%'}]} />
                        </View>
                        <Animated.Text style={styles.progressText}>
                            {perDone}%
                        </Animated.Text>
                    </View>
        )
    }

    const CloseButton = () => {
        return (
                <Icon
                    name='close'
                    type='ionicons'
                    size={28}
                    color="white"
                    iconStyle={{marginTop:10}}
                    onPress={handleCloseClick}
                />   
        )
    }

    const handleBackPress = () => {
        if(propertyState.step === 1)
        {
            props.handleCallback();
        }
        else
        {
            setPropertyState({...propertyState, step: propertyState.step - 1});
        }
    }

    const handleNextPress = (content) => {
        setPropertyState({...propertyState,...content});
    }

    const handleCloseClick = () => {
        props.handleCallback();
    }

    const formStep = () => {

        const step = propertyState.step;
        {
            switch(step) {
            case 1:
                return <Screen1 nextStep={handleNextPress} propertyDetails={propertyState} />;
            case 2:
                return <Screen2 nextStep={handleNextPress} propertyDetails={propertyState} />;
            case 3:
                return <Screen3 nextStep={handleNextPress} propertyDetails={propertyState} />;
            case 4:
                return <Screen4 nextStep={handleNextPress} propertyDetails={propertyState} />;
            case 5:
                return <Screen5 nextStep={handleNextPress} propertyDetails={propertyState} />;
            case 6:
                return <Screen6 nextStep={handleNextPress} propertyDetails={propertyState} />;
            }
        }
    }

    return(
        <>
        <Header
            barStyle='light-content'
            leftComponent={BackButton}
            centerComponent={ProgressBar}
            centerContainerStyle={{flexDirection:'column',justifyContent: 'space-around', alignItems:'space-around'}}
            rightComponent={CloseButton}
         />
            {formStep()}
        </>
    )
}

export default AddPropertyForm;