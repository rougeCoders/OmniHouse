import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './home';
import PropertyListing from '../propertyListing';

const Stack = createStackNavigator();

const HomeStack = () => {
    return(
        <NavigationContainer>
          <Stack.Navigator initialRouteName="HomeScreen">
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="My Properties" component={PropertyListing} />
          </Stack.Navigator>  
        </NavigationContainer>

    )
}

export default HomeStack;