import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
  Button,
  List,
  ListItem,
} from 'react-native-ui-kitten';

export default class Home extends Component {

  HomeIcon = style => <Icon {...style} name="home-outline" />;
  LeftAction = () => <TopNavigationAction icon={this.HomeIcon} />;
  render() {
    return (
      <Layout style={styles.container}>
        <TopNavigation
          title="Home"
          alignment="center"
          leftControl={this.LeftAction()}
        />
        <View style={styles.separatorTop}/>
        <Button
          style={styles.button}
          appearance="ghost"
          size="giant"
          textStyle={{color: 'white'}}
          onPress={() => this.props.navigation.navigate('AddItem')}>
          Add an Item
        </Button>
          <View style={styles.separator}/>
        <Button
          style={styles.button}
          appearance="ghost"
          size="giant"
          textStyle={{color: 'white'}}
          onPress={() => this.props.navigation.navigate('List')}>
          List of Items
        </Button>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingVertical: 4,
    paddingHorizontal: 4,
    height: 1000
  },
  separator: {
    backgroundColor: '#ececec',
    marginTop: 10,
    marginLeft: 0,
    height: 1,
    width: 410,
  },
  separatorTop: {
    backgroundColor: '#ececec',
    marginTop: 10,
    height: 5,
    width: 410,
  },
  button: {
    marginVertical: 4,
    marginHorizontal: 4,
    color: 'white'
  },
});
