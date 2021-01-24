import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import ButtonCard from '../../components/cards/buttonCard/index.js';
import styles from './home.style.js';

const HomeScreen = (props) => {

    const user = useSelector(state => state.auth.user);
    const mockData = [
        {
            Title: 'My Properties',
            ScreenLink: 'My Properties'
        },
        {
            Title: 'Marketplace'
        },
        {
            Title: 'Calender'
        },
        {
            Title: 'Maintenance'
        },
        {
            Title: 'Wallet'
        },
        {
            Title: 'Inventory'
        },
        {
            Title: 'Message'
        }
    ];
    return(
        <View style={styles.container}>
            <Text h3> Welcome {user.displayName} </Text>

            <ScrollView horizontal={true}>
                {
                    mockData.map((button, index) => <ButtonCard key={index} {...props} {...button} />)
                }
            </ScrollView>
        </View>
    )
}

export default HomeScreen;