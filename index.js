/**
 * @format
 */
import {AppRegistry, View, Text} from 'react-native';
import App from './src/App';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './src/store/reducers';
import {name as appName} from './app.json';
import Toast from 'react-native-toast-message';

const composeEnhancers = window.__REDUX_DEVTOOLS_ETENSION_CONSOLE__ || compose;
const createStoreWithMiddleware = createStore(
    reducers,
    composeEnhancers(applyMiddleware(promiseMiddleware))
)

const toastConfig = {
    info: (internalState) => (
      <View style={{ height: 60, width: '100%', backgroundColor: 'pink' }}>
        <Text>{internalState.text1}</Text>
      </View>
    )   
}

const reduxApp = () => (
    <Provider store={createStoreWithMiddleware}>
          <App/>
          <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
    </Provider>
)

AppRegistry.registerComponent(appName, () => reduxApp);
