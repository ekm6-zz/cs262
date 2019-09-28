/*
  author: Enoch Mwesigwa
  date: 9/27/19
*/
import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operator: '',
      var2: '',
      var1: '',
      varInQ: 'var1',
    };
  }

  // updates the variable in question
  inputNum = number => {
    this.setState({
      [this.state.varInQ]: this.state[this.state.varInQ] + number,
    });
  };

  //handles the event for when an operator is pressed
  onOperator(op) {
    this.setState({ operator: op });
    if (this.state.varInQ == 'var1') {
      this.setState({ varInQ: 'var2' });
    } else {
      this.calculate();
    }
  }

  //runs calculations
  calculate() {
    if (this.state.var2 != '') {
      let func =
        this.state.var1 + ' ' + this.state.operator + ' ' + this.state.var2;
      this.setState({ var1: eval(func), varInQ: 'var1', var2: '' });
    }
  }

  //resets all the state variables
  clear() {
    this.setState({ var1: '', var2: '', operator: '', varInQ: 'var1'});
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: '#BDBF87',
            height: 60,
            marginBottom: 5,
            width: 325,
          }}>
          <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 10 }}>
            {this.state[this.state.varInQ]}
          </Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Button
            style={styles.buttonDesign}
            title="1"
            buttonStyle={{ backgroundColor: '#9ACD32' }}
            onPress={() => this.inputNum('1')}
          />
          <Button
            style={styles.buttonDesign}
            title="2"
            buttonStyle={{ backgroundColor: '#9ACD32' }}
            onPress={() => this.inputNum('2')}
          />
          <Button
            style={styles.buttonDesign}
            title="3"
            buttonStyle={{ backgroundColor: '#9ACD32' }}
            onPress={() => this.inputNum('3')}
          />
          <Button
            style={styles.buttonDesign}
            title="X"
            buttonStyle={{ backgroundColor: '#666600' }}
            onPress={() => this.onOperator('*')}
          />
        </View>

        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Button
            style={styles.buttonDesign}
            title="4"
            buttonStyle={{ backgroundColor: '#9ACD32' }}
            onPress={() => this.inputNum('4')}
          />
          <Button
            style={styles.buttonDesign}
            title="5"
            buttonStyle={{ backgroundColor: '#9ACD32' }}
            onPress={() => this.inputNum('5')}
          />
          <Button
            style={styles.buttonDesign}
            title="6"
            buttonStyle={{ backgroundColor: '#9ACD32' }}
            onPress={() => this.inputNum('6')}
          />
          <Button
            style={styles.buttonDesign}
            title="/"
            buttonStyle={{ backgroundColor: '#666600' }}
            onPress={() => this.onOperator('/')}
          />
        </View>

        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Button
            style={styles.buttonDesign}
            title="7"
            buttonStyle={{ backgroundColor: '#9ACD32' }}
            onPress={() => this.inputNum('7')}
          />
          <Button
            style={styles.buttonDesign}
            title="8"
            buttonStyle={{ backgroundColor: '#9ACD32' }}
            onPress={() => this.inputNum('8')}
          />
          <Button
            style={styles.buttonDesign}
            title="9"
            buttonStyle={{ backgroundColor: '#9ACD32' }}
            onPress={() => this.inputNum('9')}
          />
          <Button
            style={styles.buttonDesign}
            title="+"
            buttonStyle={{ backgroundColor: '#666600' }}
            onPress={() => this.onOperator('+')}
          />
        </View>

        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Button
            style={{ width: 160, margin: 5 }}
            title="0"
            buttonStyle={{ backgroundColor: '#9ACD32' }}
            onPress={() => this.inputNum('0')}
          />
          <Button
            style={styles.buttonDesign}
            title="."
            buttonStyle={{ backgroundColor: '#9ACD32' }}
            onPress={() => this.inputNum('.')}
          />
          <Button
            style={styles.buttonDesign}
            title="-"
            buttonStyle={{ backgroundColor: '#666600' }}
            onPress={() => this.onOperator('-')}
          />
        </View>

        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Button
            style={{
              width: 100,
              marginLeft: 145,
              marginTop: 5,
              marginRight: 5,
            }}
            title="C"
            buttonStyle={{ backgroundColor: '#666600' }}
            onPress={() => this.clear()}
          />
          <Button
            style={{ width: 75, marginLeft: 5, marginTop: 5 }}
            title="="
            buttonStyle={{ backgroundColor: '#666600' }}
            onPress={() => this.calculate()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 360,
    height: 500,
    backgroundColor: 'black',
  },
  buttonDesign: {
    margin: 5,
    width: 75,
  },
});
