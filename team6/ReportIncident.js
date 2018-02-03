import React from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class ReportIncident extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      description: ""
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <TextInput onChangeText={(event) => this.onDescriptionInputChange(event)} placeHolder="Vad har hänt?" style={styles.description}/>
      </View>
    )
  }

  onDescriptionInputChange = (event) => {
    this.setState({description: event.target.value})
  }
}


const pink = "#F000EF"
const purple = "#7A30CF"
const yellow = "#FFD101"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  description: {

  }
});
