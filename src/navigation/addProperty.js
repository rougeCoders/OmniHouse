import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,HeaderBackButton } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import stackStyle from '../styles/stack.style.js';
import OmniHouseTheme from '../styles/theme.js';
import Screen1 from '../components/forms/addProperty/screens/screen1.js';
import Screen2 from '../components/forms/addProperty/screens/screen2.js';
import Screen3 from '../components/forms/addProperty/screens/screen3.js';
import Screen4 from '../components/forms/addProperty/screens/screen4.js';
import Screen5 from '../components/forms/addProperty/screens/screen5.js';
import Screen6 from '../components/forms/addProperty/screens/screen6.js';
import Screen7 from '../components/forms/addProperty/screens/screen7.js';
import Screen8 from '../components/forms/addProperty/screens/screen8.js';
import Screen9 from '../components/forms/addProperty/screens/screen9.js';
import Screen10 from '../components/forms/addProperty/screens/screen10.js';
import Screen11 from '../components/forms/addProperty/screens/screen11.js';
import Screen12 from '../components/forms/addProperty/screens/screen12.js';
import Screen13 from '../components/forms/addProperty/screens/screen13.js';
import Screen14 from '../components/forms/addProperty/screens/screen14.js';
import Screen15 from '../components/forms/addProperty/screens/screen15.js';
import Screen16 from '../components/forms/addProperty/screens/screen16.js';


const Stack = createStackNavigator();

const AddPropertyNavigator = (propsparent) => {

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
                <Stack.Screen name="Screen6"
                    component={Screen6}
                 />
                 <Stack.Screen name="Screen7"
                    component={Screen7}
                 />
                 <Stack.Screen name="Screen8"
                    component={Screen8}
                 />
                 <Stack.Screen name="Screen9"
                    component={Screen9}
                 />
                 <Stack.Screen name="Screen10"
                    component={Screen10}
                 />
                <Stack.Screen name="Screen11"
                    component={Screen11}
                 />
                <Stack.Screen name="Screen12"
                    component={Screen12}
                 />
                 <Stack.Screen name="Screen13"
                    component={Screen13}
                 />
                 <Stack.Screen name="Screen14"
                    component={Screen14}
                 />
                 <Stack.Screen name="Screen15"
                    component={Screen15}
                 />
                 <Stack.Screen name="Screen16"
                    component={Screen16}
                 />
          </Stack.Navigator>  
        </NavigationContainer>
    )
}

export default AddPropertyNavigator;