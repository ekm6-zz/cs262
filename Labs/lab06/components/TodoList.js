/*
This file defines the fuctions for the List items
Author: Enoch Mwesigwa
*/
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  ApplicationProvider,
  Layout,
  Text,
  Input,
} from 'react-native-ui-kitten';

export default function TodoList(props) {
  return (
    <Layout style={styles.listContainer}>
      <Icon
        name={props.checked ? 'check' : 'square'}
        size={30}
        color="white"
        style={{ marginLeft: 15 }}
        onPress={props.setChecked}
      />
      <Layout>
        {props.checked && <Layout style={styles.verticalLine} />}
        <Text style={styles.listItem}>{props.text}</Text>
      </Layout>
      <Icon
        name="trash-2"
        size={30}
        color="white"
        style={{ marginLeft: 'auto' }}
        onPress={props.deleteTodo}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: '5%',
    flexDirection: 'row',
    borderColor: 'white',
    borderBottomWidth: 1.5,
    width: '100%',
    alignItems: 'stretch',
    minHeight: 40,
  },
  listItem: {
    paddingBottom: 20,
    paddingLeft: 10,
    marginTop: 6,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  verticalLine: {
    borderBottomColor: 'white',
    borderBottomWidth: 4,
    marginLeft: 10,
    width: '100%',
    position: 'absolute',
    marginTop: 15,
    fontWeight: 'bold',
  },
});
