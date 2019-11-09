import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ItemComponent from '../components/ItemComponent';
import {
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
  Button,
  List,
  ListItem,
} from 'react-native-ui-kitten';
import Constants from 'expo-constants';

import { db } from './config';

let itemsRef = db.ref('/items');

export default class ListView extends Component {
  state = {
    items: [],
  };

  BackIcon = style => <Icon {...style} name="arrow-back-outline" />;
  LeftAction = () => (
    <TopNavigationAction
      onPress={() => this.props.navigation.goBack()}
      icon={this.BackIcon}
    />
  );
  componentDidMount() {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      console.log(items);
      this.setState({ items });
    });
  }

  renderItem = ({ item, index }) => (
    <React.Fragment>
      <ListItem title={`${index + 1} ${item.name} `} />
      <View style={styles.separator} />
    </React.Fragment>
  );

  render() {
    return (
      <View style={styles.container}>
        <TopNavigation
          alignment="center"
          title="List"
          leftControl={this.LeftAction()}
        />
        <View style={styles.separatorTop} />
        <List
          style={styles.list}
          data={this.state.items}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
    paddingTop: Constants.statusBarHeight,
  },
  separator: {
    backgroundColor: '#ececec',
    marginLeft: 0,
    height: 1,
    width: 410,
  },
  separatorTop: {
    backgroundColor: '#ececec',
    //marginTop: 10,
    height: 5,
    width: 410,
  },
});
