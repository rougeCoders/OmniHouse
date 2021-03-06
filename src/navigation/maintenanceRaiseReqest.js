import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,HeaderBackButton } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import stackStyle from '../styles/stack.style.js';
import Screen1 from '../components/forms/raiseRequest/screens/screen1.js';
import Screen2 from '../components/forms/raiseRequest/screens/screen2.js';
import Screen3 from '../components/forms/raiseRequest/screens/screen3.js';
import Screen4 from '../components/forms/raiseRequest/screens/screen4.js';
import Screen5 from '../components/forms/raiseRequest/screens/screen5.js';

const Stack = createStackNavigator();

const MaintenanceRaiseIssueNavigator = (propsparent) => {
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
                <Stack.Screen name="Screen2"
                    component={Screen2}
                 />
                <Stack.Screen name="Screen3"
                    component={Screen3}
                />
                <Stack.Screen name="Screen4"
                    component={Screen4}
                />
                <Stack.Screen name="Screen5"
                    component={Screen5}
                />
            </Stack.Navigator>  
        </NavigationContainer>
    )
}

export default MaintenanceRaiseIssueNavigator;