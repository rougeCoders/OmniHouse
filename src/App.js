import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import {LogBox} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import RegisterUser from './components/signup/authenticate/registerUser.js';
import SelectSignUpType from './components/signup/signuptype/index.js';
import { autoSignIn } from './store/actions/authActions.js';
import LoginUser from './components/signup/authenticate/loginUser.js';
import RegisterUserType from './components/signup/authenticate/userType.js';
import HomeStack from './screens/home/homeStack.js';
import OmniHouseTheme from './styles/theme.js';

const Stack = createStackNavigator();

const App = (props) => {

  // props.dispatch(autoSignIn());

  LogBox.ignoreAllLogs("value");
  useEffect(() => {
    RNBootSplash.hide({ duration: 250 });
  },[]);

  return(
        props.auth.isAuth && props.auth.userType !== null?
        <HomeStack />
        :
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SelectSignUpType">
                <Stack.Screen name="Sign In" component={SelectSignUpType} />
                <Stack.Screen name="LoginUser" component={LoginUser} />
                <Stack.Screen name="RegisterUser" component={RegisterUser} />
                <Stack.Screen name="RegisterUserType" component={RegisterUserType} />
          </Stack.Navigator>  
        </NavigationContainer>
  )
}

const mapStateToProps = state => ({ auth: state.auth })
export default connect(mapStateToProps)(App);