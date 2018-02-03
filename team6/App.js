import React from 'react';
//import { MapView } from 'react-native-map-clustering';
import { MapView } from 'expo';
import { Button, StyleSheet, Text, View } from 'react-native';
import data from './dots.json';
import mapStyle from './mapstyle.json'



//<Text>Open up App.js to start working on your app!</Text>
//<Text>Changes you make will automatically reload.</Text>
//<Text>Shake your phone to open the developer menu.</Text>




export default class App extends React.Component {
  render() {
    console.log(data);

    return (
      //<View>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 57.704085,
            longitude: 11.965321,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} showsUserLocation
          customMapStyle={mapStyle}>

          {data.map(marker => (
            <MapView.Marker
              key={marker.key}
              coordinate={{latitude: marker.lat, longitude: marker.long}}
              title={marker.type}
              />
            ))
          }

          </MapView>
        //<Button onPress={event => this.onButtonPress(event)} title="Hello"/>
      //</View>
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
