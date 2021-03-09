import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import { useSelector } from 'react-redux';
import styles from './home.style.js';
import HomeHeader from '../../components/home/homeHeader.js';
import HomeNavigation from '../../components/home/homeNavigation.js';

const HomeScreen = (props) => {
    
    const user = useSelector(state => state.auth.user);
    return(
        <>
            <HomeHeader />
            <ScrollView style={styles.container}>
                <View>
                    <Text h4 style={styles.welcomeText}>Hey {user.name},</Text>
                </View>
                <HomeNavigation {...props} />
            </ScrollView>
        </>
    )
}

export default HomeScreen;