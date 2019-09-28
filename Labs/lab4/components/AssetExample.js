import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';

export default class AssetExample extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      inputInfo: 'fish' //
    }
  }

  //Updates the value of the text in the textbox 
  //param: text - string - text to be displayed
  //called by child component AssetExample
  changeInput=(val)=>{
    this.setState({inputInfo: val })
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          value={this.state.inputInfo}
          onChangeText={this.changeInput}
        />
        <Button
          title="Submit"
          onPress={()=> this.props.permission(this.state.inputInfo) //updates the text in the header
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});
