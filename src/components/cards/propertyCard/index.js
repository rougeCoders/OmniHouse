import React from 'react';
import { View, TouchableOpacity, Animated } from "react-native";
import { Avatar, Badge, Text } from 'react-native-elements';
import styles from './propertyCard.style.js';
import OmniHouseTheme from '../../../styles/theme.js';

const PropertyCard = (props) => {
    
    const handlePress = () => {
    } 
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer} >
                <View>
                    <Avatar rounded
                        size={OmniHouseTheme.spacing(7.5)}
                        source={props.ImageUri} />
                </View>
                <View>
                    <Text h4 style={styles.buttonText}>{props.Address}</Text>
                    <View style={styles.subContainer}>
                        <View style={styles.progressBarContainer}>
                            <Animated.View style={[styles.progressBar,
                                {width: props.PerCompleted + '%'}]} />
                        </View>
                        <Animated.Text style={styles.progressText}>
                            {props.PerCompleted}%
                        </Animated.Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.labelText}>LIVE</Text>
                </View>
                
            </TouchableOpacity>
            { props.Notifications > 1 && (
                <View style={styles.badge}>
                        <Badge
                            status='error'
                            value={props.Notifications}
                            badgeStyle={styles.badgeStyle}
                            textStyle={{fontSize: OmniHouseTheme.spacing(2)}}
                            containerStyle={styles.badgeContainerStyle}
                        />
                </View>
            )}
        </View>
    )
}

export default PropertyCard;