import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  AlertIOS,
} from 'react-native';
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

import { db } from './config';

let addItem = item => {
  db.ref('/items').push({
    name: item,
  });
};

export default class AddItem extends Component {
  state = {
    name: '',
  };
  BackIcon = style => <Icon {...style} name="arrow-back-outline" />;
  LeftAction = () => (
    <TopNavigationAction
      onPress={() => this.props.navigation.goBack()}
      icon={this.BackIcon}
    />
  );

  handleChange = e => {
    this.setState({
      name: e.nativeEvent.text,
    });
  };
  handleSubmit = () => {
    addItem(this.state.name);
    AlertIOS.alert('Item saved successfully');
  };

  render() {
    return (
      <React.Fragment>
        <View style={{ paddingTop: Constants.statusBarHeight }} />
        <TopNavigation
          alignment="left"
          leftControl={this.LeftAction()}
        />
        <Layout style={styles.main}>
          <Text style={styles.title}>Add Item</Text>
          <TextInput style={styles.itemInput} onChange={this.handleChange} />
          <TouchableHighlight
            style={styles.button}
            underlayColor="white"
            onPress={this.handleSubmit}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableHighlight>
        </Layout>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 5,
    flexDirection: 'column',
    justifyContent: 'center',
   // backgroundColor: '#6565fc',
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white',
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center',
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
