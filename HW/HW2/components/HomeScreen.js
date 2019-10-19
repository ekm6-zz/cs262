import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class HomeScreen extends Component {

  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={require('../assets/home-icon.png')}
          style={[styles.icon, { tintColor: '#add8e6' }]}
        />
        <Text>Home Screen</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  icon: {
    marginTop: 10,
    width: 140,
    height: 160,
  }
});