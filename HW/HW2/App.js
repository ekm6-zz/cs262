import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createDrawerNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import ContactScreen from './components/ContactScreen';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

// creates navigator between the screens 
const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    About: {
      screen: AboutScreen,
    },
    Contact: {
      screen: ContactScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

// a container for the apps
const AppContainer = createAppContainer(AppNavigator);


