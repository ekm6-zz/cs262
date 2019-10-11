import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  mapping,
  light as lightTheme,
  dark as darkTheme,
} from '@eva-design/eva';

import {
  ApplicationProvider,
  Layout,
  Text,
  Input,
} from 'react-native-ui-kitten';

import TodoList from './components/TodoList';

import Icon from 'react-native-vector-icons/Feather';

const ApplicationContent = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  //appends an Item to the todo list
  const addTodo = () => {
    if (value.length > 0) {
      setTodos([...todos, { text: value, key: Date.now(), checked: false }]);
      setValue('');
    }
  };

  //checks the box on the todolist
  const checkTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.key === id) todo.checked = !todo.checked;
        return todo;
      })
    );
  };

  //deletes an item on the todo list
  const deleteTodo = id => {
    setTodos(
      todos.filter(todo => {
        if (todo.key !== id) return true;
      })
    );
  };

  return (
    <Layout style={styles.container}>
      <Text category="h1" style={styles.header}>
        Todo List
      </Text>
      <Layout style={styles.textInputContainer}>
        <Input
          style={styles.textInput}
          placeholder="What do you want to do today?"
          value={value}
          onChangeText={value => setValue(value)}
        />
        <TouchableOpacity onPress={() => addTodo()}>
          <Icon
            name="plus"
            size={30}
            color="white"
            style={{ marginLeft: 15 }}
          />
        </TouchableOpacity>
      </Layout>

      <ScrollView style={{ width: '100%' }}>
        {todos.map(item => (
          <TodoList
            text={item.text}
            key={item.key}
            checked={item.checked}
            setChecked={() => checkTodo(item.key)}
            deleteTodo={() => deleteTodo(item.key)}
          />
        ))}
      </ScrollView>
    </Layout>
  );
};

//this style alows the use of UI kitten components
const App = () => (
  <ApplicationProvider mapping={mapping} theme={darkTheme}>
    <ApplicationContent />
  </ApplicationProvider>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  header: {
    marginTop: '15%',
    color: 'white',
    paddingBottom: 10,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderColor: 'black',
    borderBottomWidth: 1,
    paddingRight: 10,
    paddingBottom: 10,
  },
  textInput: {
    flex: 1,
    height: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 10,
    minHeight: '3%',
  },
});
