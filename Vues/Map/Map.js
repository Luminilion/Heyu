import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, Dimensions, Animated, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import icone from './bear.jpg';

// Gets dimensions of screen to dynamically adjust 
const { width, height } = Dimensions.get("window");

// Set dimensions of the card to be displayed
const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

const Images = [
  { uri: "https://i.imgur.com/sNam9iJ.jpg" },
  { uri: "https://i.imgur.com/N7rlQYt.jpg" },
  { uri: "https://i.imgur.com/UDrH0wm.jpg" },
  { uri: "https://i.imgur.com/Ka8kNST.jpg" }
]

class Map extends React.Component {
	

	_changeScreenChat = () => {
	this.props.navigation.navigate("Chat")

  }
  
	_changeScreenContacts = () => {
	this.props.navigation.navigate("Contacts")

  }
  
	_changeScreenBonus = () => {
	this.props.navigation.navigate("Bonus")

  }
  
  render() {
	  console.log('render')

	this.state = {
	    markers: [
	      {
	        coordinate: {
	          latitude: 45.524548,
	          longitude: -122.6749817,
	        },
	        title: "Best Place",
	        description: "This is the best place in Portland",
	        image: Images[0],
	      },
	      {
	        coordinate: {
	          latitude: 45.524698,
	          longitude: -122.6655507,
	        },
	        title: "Second Best Place",
	        description: "This is the second best place in Portland",
	        image: Images[1],
	      },
	      {
	        coordinate: {
	          latitude: 45.5230786,
	          longitude: -122.6701034,
	        },
	        title: "Third Best Place",
	        description: "This is the third best place in Portland",
	        image: Images[2],
	      },
	      {
	        coordinate: {
	          latitude: 45.521016,
	          longitude: -122.6561917,
	        },
	        title: "Fourth Best Place",
	        description: "This is the fourth best place in Portland",
	        image: Images[3],
	      },
	    ],
		lui: {
			 coordinate: {
	          latitude: 45.524698,
	          longitude: -122.6655507,
	        },
		}
	    
	};

    return (
	

      <View style={{flex:1}}>
		  

	      <MapView
		      ref={map => this.map = map}
			  initialRegion={this.state.region}
			  style={styles.container}
		      showsUserLocation={true}
			  region= {{
			  latitude: this.state.lui.coordinate.latitude,
			  longitude: this.state.lui.coordinate.longitude,
			  latitudeDelta: 0.04864195044303443,
			  longitudeDelta: 0.040142817690068,
			  }}
	      >
		  
			  <MapView.Marker key={1} onPress={() => this._changeScreen()} coordinate={{latitude: 45.521016, longitude: -122.6561917,}}>
			        
					
					  <Text style={{backgroundColor: 'white', padding: 5}}>Salut à tous les amis</Text>
					  <Image
						style={{width: 50, height:50}}
						source={icone}
					  />
					  
					
					      
			        
			      </MapView.Marker>
				  
			  

	      </MapView>
		  
		  <TouchableOpacity
		  style={{backgroundColor: 'red', height: 50, width: 50, position: "absolute", top:0 , left: 0, paddingVertical: 10, borderRadius:50, marginTop:30}}
          onPress={() => this._changeScreenContacts()}>
		  </TouchableOpacity>
		  <TouchableOpacity
		  style={{backgroundColor: 'green', height: 30, width: 30, position: "absolute", top:0 ,alignSelf:'center', borderRadius:50, marginTop:30}}
          onPress={() => this._changeScreenBonus()}>
			  <Image
			  style={{height: 30, width: 30}}
			  source={{uri: 'https://theocvnt.alwaysdata.net/applicationImages/question-mark.png'}}
			  />
		  </TouchableOpacity>
		  <TouchableOpacity
		  style={{backgroundColor: 'orange', height: 50, width: 50, position: "absolute", top:0 , right: 0, paddingVertical: 10, borderRadius:50, marginTop:30}}
          onPress={() => this._changeScreenChat()}>
		  </TouchableOpacity>

	      <KeyboardAvoidingView behavior="padding" enabled>
			<View style={styles.barre_message}>
				<TextInput style={styles.input} placeholder="..."/>
				<Image
	            style={{width: 50}}
	            source={{uri: 'https://theocvnt.alwaysdata.net/send.png'}}
				/>
			</View>
		  </KeyboardAvoidingView>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 50,
    height: 50,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
  barre_message:{
	minHeight: 50,
	flexDirection:'row'
  },
  input:{
	flex:1,
	borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
    padding:10,
    minHeight:50,
	flexWrap:'wrap'
  }
});

export default Map