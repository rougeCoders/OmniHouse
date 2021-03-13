import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,HeaderBackButton } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import stackStyle from '../styles/stack.style.js';
import Screen1 from '../components/forms/marketPlace/screens/screen1.js';

const Stack = createStackNavigator();

const MarketPlaceNavigator = (propsparent) => {
    console.log("Chirag1");
    console.log(propsparent.selectedItem);
    return(
    <NavigationContainer independent={true}>
          <Stack.Navigator 
                initialRouteName="Home"
                screenOptions={{
                    headerTitle: '',
                    headerBackTitle:'Back',
                    headerBackTitleVisible: true,
                    headerStyle: stackStyle.headerStyle,
                    headerTintColor: OmniHouseTheme.palette.primary.font,
                    cardStyle: stackStyle.cardStyle,
                    headerRight:() => (
                        <Icon
                            name='close'
                            type= 'ionicon'
                            color='#fff'
                            onPress={() => {
                                propsparent.handleCallback()
                            }}
                        />
                    ),
                    headerRightContainerStyle:{marginRight:15,padding:5}
                }}
              > 
                <Stack.Screen name="Screen1"
                    component={Screen1}
                    initialParams = {{selectedItem:propsparent.selectedItem}}
                    options = {{ 
                        headerLeft: (props) => (
                            <HeaderBackButton
                              {...props}
                              onPress={() => {
                                propsparent.handleCallback()
                              }}
                            />
                        )
                    }}
                    />
            </Stack.Navigator>  
        </NavigationContainer>
    )
}

export default MarketPlaceNavigator;