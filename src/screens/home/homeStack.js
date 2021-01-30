import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './home';
import PropertyListing from './../propertyListing/index.js';
import constants from '../../constants';

const Stack = createStackNavigator();

const HomeStack = () => {
    return(
        <NavigationContainer independent={true}>
          <Stack.Navigator initialRouteName="HomeScreen"
            screenOptions={{headerTitle:''}}>
              <Stack.Screen name="Home"
                component={HomeScreen}
                options={{headerShown: false}}/>
              <Stack.Screen name={constants.ScreenNames.MyProperty}
                component={PropertyListing}
                 />
          </Stack.Navigator>  
        </NavigationContainer>

    )
}

export default HomeStack;