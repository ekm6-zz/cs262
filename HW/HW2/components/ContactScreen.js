import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';

export default class ContactScreen extends Component {
  
  //  allows navigations between screens (shows up on bottom)
  static navigationOptions = {
    drawerLabel: 'Contact',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/contact-icon.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Image
        source={require('../assets/contact-icon.png')}
        style={[styles.icon, { tintColor: '#add8e6' }]}
      />
                <Text>Contact Screen</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  icon: {
    width: 200,
    height: 200,
  }
});