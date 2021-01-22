import React, { useEffect, Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect } from 'react-redux';
import {LogBox} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import RegisterUser from './src/components/signup/authenticate/registerUser.js';
import VideoScreen from './src/components/home/videos/index.js';
import HomeScreen from './src/components/home/home.js';
import SelectSignUpType from './src/components/signup/signuptype/index.js';
import { autoSignIn } from './src/store/actions/authActions.js';
import LoginUser from './src/components/signup/authenticate/loginUser.js';
import RegisterUserType from './src/components/signup/authenticate/userType.js';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MainDrawer = () => {
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomeScreen}/>
    <Drawer.Screen name="Videos" component={VideoScreen}/>
  </Drawer.Navigator>
}

const App = (props) => {

  // props.dispatch(autoSignIn());

  LogBox.ignoreAllLogs("value");
  useEffect(() => {
    RNBootSplash.hide({ duration: 250 });
  },[]);

  return(
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SelectSignUpType">
        {    
          props.auth.isAuth && props.auth.userType !== null?
            <Stack.Screen name="Home" component={HomeScreen} />
          :
          <>
            <Stack.Screen name="Sign In" component={SelectSignUpType} />
            <Stack.Screen name="LoginUser" component={LoginUser} />
            <Stack.Screen name="RegisterUser" component={RegisterUser} />
            <Stack.Screen name="RegisterUserType" component={RegisterUserType} />
          </>
        }
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}

const mapStateToProps = state => ({ auth: state.auth })
export default connect(mapStateToProps)(App);