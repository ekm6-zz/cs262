import * as React from 'react';
import { Text, View, StyleSheet, Image,Dimensions } from 'react-native';

export default class Display extends React.Component {
  // different views for different states
  OnFirstLine = () => (
    <View style={styles.component}>
    <Text style={styles.text} >  </Text>
    </View>
  );

  OnChooseRhyme = () => (
    <View style={styles.component}>
      <Text style={styles.text} > {this.props.sentence1} </Text>
    </View>
  );
  OnSecondSentence = () => (
    <View style={styles.component}>
      <Text style={styles.text} > {this.props.sentence1} </Text>
      <Text style={styles.text}> _______________ {this.props.rhyme}. </Text>
    </View>
  );
  onFinal = () => (
    <View style={styles.component}>
      <Text style={styles.text} > {this.props.sentence1} </Text>
      <Text style={styles.text}> {this.props.sentence2} {this.props.rhyme}</Text>
    </View>
  );

  ShownContent = () => {
    switch (this.props.phase) {
      case 'sentence1':
        return this.OnFirstLine();
      case 'rhyme':
        return this.OnChooseRhyme();
      case 'sentence2':
        return this.OnSecondSentence();
      case 'onFinal':
        return this.onFinal();
    }
  };

  render() {
    return <View style={styles.container}>{this.ShownContent()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 24,
    marginTop: 100,
  },
  component:{
    backgroundColor: 'white',
    color: 'black',
    width:  Math.round(Dimensions.get('window').width) -20,
    height: 200,
    justifyContent: 'center',
    textAlign: 'center'
  },
  text:{
    fontSize: 15,
    textAlign: 'center',
    color: 'black'
  }
});
