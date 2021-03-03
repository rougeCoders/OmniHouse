import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './home';
import PropertyListing from './../propertyListing/index.js';
import constants from '../../constants';
import stackStyle from '../../styles/stack.style.js';
import OmniHouseTheme from '../../styles/theme.js';
import Footer from '../../components/footer/footer.js';


const Stack = createStackNavigator();

const HomeStack = () => {
    return(
        <>
        <NavigationContainer independent={true}>
          <Stack.Navigator initialRouteName="HomeScreen"
            screenOptions={{
              headerTitle:'',
              headerBackTitle: 'Back',
              headerBackTitleVisible: 'true',
              headerStyle: stackStyle.headerStyle,
              headerTintColor: OmniHouseTheme.palette.primary.font,
              cardStyle:stackStyle.cardStyle
            }}>
              <Stack.Screen name="Home"
                component={HomeScreen}
                options={{headerShown: false}}/>
              <Stack.Screen name={constants.ScreenNames.MyProperty}
                component={PropertyListing}
                 />
          </Stack.Navigator>  
        </NavigationContainer>
        <Footer />
        </>
    )
}

export default HomeStack;