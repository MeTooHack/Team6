import React from 'react';
import { MapView } from 'expo';
import { Button, StyleSheet, Text, View } from 'react-native';



//<Text>Open up App.js to start working on your app!</Text>
//<Text>Changes you make will automatically reload.</Text>
//<Text>Shake your phone to open the developer menu.</Text>




export default class App extends React.Component {
  render() {
    return (
      <View>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 57.704085,
            longitude: 11.965321,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} showsUserLocation/>
        <Button onPress={event => this.onButtonPress(event)} title="Hello"/>
      </View>
    )
  }

  onButtonPress = (event) => {
    console.log("hello")
    console.log(event.target.title)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});


