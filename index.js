/**
 * @format
 */

import 'react-native-reanimated';
import 'react-native-gesture-handler';

import React from "react";
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { Provider } from 'react-redux';
import configureStore from './src/store/store';

// const store = configureStore();

const AuthPeer = () => (
    <Provider >
      <App />
     </Provider>
  );

AppRegistry.registerComponent(appName, () => App);