import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import {
  Icon,
  Input,
  Layout,
  Select,
  TopNavigation,
  ApplicationProvider,
} from 'react-native-ui-kitten';
import { mapping, light as lightTheme } from '@eva-design/eva';
import Constants from 'expo-constants';
import Display from './Components/Display';

export class ApplicationContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      instruction_input: 'Enter a Sentence',
      phase: 'sentence1',
      sentence1: '',
      rhyme: '',
      sentence2: '',
      dropdownOptions: [],
    };
  }

// handles transition for when text is submited
  onTextSumbit=()=>{
    this.setState({
            [this.state.phase]: this.state.input,
            phase: this.state.phase == 'sentence1' ? 'rhyme' : 'final',
            input: '',
          });
  }

  // what happens when the 'Submit' button is
  findRhyme = () => {
    if (this.state.phase == 'sentence1') {
      let word = this.state.input
        .split(' ')
        .slice(-1)
        .pop();
      fetch('https://api.datamuse.com/words?rel_rhy=' + word)
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.length == 0) throw 'empty list';
          this.mapData(responseJson.slice(0, 10));
        })
        .then(() => {
          this.onTextSumbit()
        })
        .catch(error => {
          console.log(error);
        });
    } else {
        this.onTextSumbit()
    }
  };

  // handles what happens a rhyme is selected
  onSelect = item => {
    this.setState({ rhyme: item.text });
    setTimeout(item => {
      this.setState({ phase: 'sentence2', instruction_input: 'Complete thepoem' });
    }, 2000);
  };

  //converts the data into something that the select component
  //can use
  mapData = data => {
    let newFormat = [];
    data.forEach(element => {
      newFormat.push({ text: element.word });
    });
    this.setState({ dropdownOptions: newFormat });
  };

  // dropdown componets when the user needs to select a rhyme
  DropDown = () => (
    <Select
      style={styles.select}
      data={this.state.dropdownOptions}
      placeholder="Choose a word"
      onSelect={this.onSelect}
      disabled={this.state.phase != 'rhyme'}
    />
  );

  // input and button for When the User needs to enter a sentence
  EnterText = () => (
    <View>
      <Input
        value={this.state.input}
        placeholder={this.state.instruction_input}
        onChangeText={text => this.setState({ input: text })}
      />
      <Button title="Submit" onPress={this.findRhyme} />
    </View>
  );

  // handles the conditional rendering
  ShownContent = () => {
    switch (this.state.phase) {
      case 'sentence1':
        return this.EnterText();
      case 'rhyme':
        return this.DropDown();
      case 'sentence2':
        return this.EnterText();
      case 'final':
        return (<View></View>);
    }
  };

  render() {
    return (
      <View style={styles.container}>
          {this.ShownContent()}
        <Display
          phase={this.state.phase}
          sentence1={this.state.sentence1}
          sentence2={this.state.sentence2}
          rhyme={this.state.rhyme}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
    marginTop: 0,
  },
});

const App = () => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <ApplicationContent />
  </ApplicationProvider>
);

export default App;
