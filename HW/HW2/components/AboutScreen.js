import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class AboutScreen extends Component {
  
  //  allows navigations between screens (shows up on bottom)
  static navigationOptions = {
    drawerLabel: 'About',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={require('../assets/about-icon.png')}
          style={[styles.icon, { tintColor: '#add8e6' }]}
        />

        <Text>About Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 140,
    height: 160,
  }
});