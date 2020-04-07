import React from 'react';
import {SafeAreaView, Text, StatusBar, Button} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './home';
import Detail from './detail';

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Detail: Detail,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
