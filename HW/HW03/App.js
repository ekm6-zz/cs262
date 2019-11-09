import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  mapping,
  light as lightTheme,
  dark as darkTheme,
} from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
} from 'react-native-ui-kitten';
import Home from './components/Home';
import AddItem from './components/AddItem';
import List from './components/List';

const AppNavigator = createStackNavigator(
  {
    List: {
      screen: List,
      navigationOptions: {
        header: null,
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    AddItem: {
      screen: AddItem,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const ApplicationContent = createAppContainer(AppNavigator);

const App = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={darkTheme}>
      <ApplicationContent />
    </ApplicationProvider>
  </React.Fragment>
);
export default App;
