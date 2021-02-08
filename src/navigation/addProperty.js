import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,HeaderBackButton } from '@react-navigation/stack';
import Screen1 from '../components/forms/addProperty/screens/screen1.js';
import Screen2 from '../components/forms/addProperty/screens/screen2.js';
import Screen3 from '../components/forms/addProperty/screens/screen3.js';
import Screen4 from '../components/forms/addProperty/screens/screen4.js';
import Screen5 from '../components/forms/addProperty/screens/screen5.js';
import Screen6 from '../components/forms/addProperty/screens/screen6.js';
import Screen10 from '../components/forms/addProperty/screens/screen10.js';
import Screen11 from '../components/forms/addProperty/screens/screen11.js';


const Stack = createStackNavigator();

const AddPropertyNavigator = (propsparent) => {

    return(
        <NavigationContainer independent={true}>
          <Stack.Navigator 
                initialRouteName="Home"
                screenOptions={{
                    title: '',
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'blue' },
                    headerBackTitle:'Back',
                    headerBackTitleVisible: true
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
                <Stack.Screen name="Screen6"
                    component={Screen6}
                 />
                <Stack.Screen name="Screen10"
                    component={Screen10}
                 />
                <Stack.Screen name="Screen11"
                    component={Screen11}
                 />
          </Stack.Navigator>  
        </NavigationContainer>
    )
}

export default AddPropertyNavigator;