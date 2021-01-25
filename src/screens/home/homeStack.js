import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './home';
import PropertyListing from './../propertyListing/index.js';
import constants from '../../constants';

const Stack = createStackNavigator();

const HomeStack = () => {
    return(
        <NavigationContainer>
          <Stack.Navigator initialRouteName="HomeScreen">
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name={constants.ScreenNames.MyProperty} component={PropertyListing} />
          </Stack.Navigator>  
        </NavigationContainer>

    )
}

export default HomeStack;