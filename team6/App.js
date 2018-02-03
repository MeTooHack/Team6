import React from 'react';
//import { MapView } from 'react-native-map-clustering';
import { MapView } from 'expo';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ReportIncident from './ReportIncident';
import data from './dots.json';
import mapStyle from './mapstyle.json'



//<Text>Open up App.js to start working on your app!</Text>
//<Text>Changes you make will automatically reload.</Text>
//<Text>Shake your phone to open the developer menu.</Text>



export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showActionMenu: false
    }
  }

  render() {
    const showActionMenu = this.state.showActionMenu
    let menu = null
    if (showActionMenu) {
      console.log(showActionMenu)
      menu = this.actionMenu()
    }

    return (
      <View style={styles.container}>
        <MapView
          style={{position: "absolute", top: 0, bottom: 0, left: 0, right: 0}}
          initialRegion={{
            latitude: 57.704085,
            longitude: 11.965321,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation
          customMapStyle={mapStyle}>

          {data.map((marker, index) => {

            let img = null;

            switch(marker.category) {
              case "FYSISKT":
                  img = require("./res/icons/fysiskt.png");
                  break;
              case "BILD":
                  img = require("./res/icons/bild.png");
                  break;
              case "VERBALT":
                  img = require("./res/icons/verbalt.png");
                  break;
              default:
                  img = require("./res/icons/rosa_stor.png");
                  break;
            }

            return (<MapView.Marker
              key={index}
              coordinate={{latitude: marker.lat, longitude: marker.long}}
              title={marker.type}
              image={img}
              />)
            })
          }

          </MapView>
        <View style={styles.buttonContainer}>
          {menu}
          <TouchableOpacity onPress={this.onButtonPress} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  onButtonPress = () => {
    this.setState({showActionMenu: !this.state.showActionMenu})
  }

  onCategoryButtonPress = (category) => {
    console.log("category ", category)
    //return <ReportIncident category={category}/>
  }

  actionMenu = () => (
    <View style={styles.actionMenuContainer}>
      <TouchableOpacity onPress={this.onCategoryButtonPress.bind(this, "physical")} style={styles.physicalCategoryButton}>
        <Text style={styles.categoryButtonText}>F</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.onCategoryButtonPress.bind(this, "verbal")} style={styles.verbalCategoryButton}>
        <Text style={styles.categoryButtonText}>V</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.onCategoryButtonPress.bind(this, "social")} style={styles.digitalCategoryButton}>
        <Text style={styles.categoryButtonText}>B</Text>
      </TouchableOpacity>
    </View>
  )
}


const pink = "#F000EF"
const purple = "#7A30CF"
const yellow = "#FFD101"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: "#7A30CF",
    borderRadius: 50,
    height: 75,
    marginBottom: 10,
    marginRight: 10,
    width: 75,
  },
  buttonText: {
    color: "#fff",
    fontSize: 50,
    paddingTop: 4,
    textAlign: "center",
  },
  actionMenuContainer: {
    position: "absolute",
    flex: 1,
    justifyContent:"space-between",
    paddingBottom: 100
  },
  physicalCategoryButton: {
    backgroundColor: yellow,
    borderRadius: 50,
    height: 50,
    marginBottom: 10,
    marginRight: 20,
    width: 50,
  },
  verbalCategoryButton: {
    backgroundColor: pink,
    borderRadius: 50,
    height: 50,
    marginBottom: 10,
    marginRight: 20,
    width: 50,
  },
  digitalCategoryButton: {
    backgroundColor: purple,
    borderRadius: 50,
    height: 50,
    marginBottom: 10,
    marginRight: 20,
    width: 50,
  },
  categoryButtonText: {
    textAlign: "center",
    paddingTop: 10,
    fontSize: 25,
    color: "#fff",
  }
});
