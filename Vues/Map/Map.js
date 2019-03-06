import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, Dimensions, Animated, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import firebaseApp from '../../firebase';
import SnackBar from 'react-native-snackbar-component';


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

	constructor(props){
		super(props);
		this.state = {
	  	dataSource: [{ id: 0, pseudo: "Guillaume", message:"hey!", latitude: 45.524548, longitude: -122.6749817, image: ""}],
	  	dialogVisible: false,
	  	newItem: 'Invalid Item',
		ordre: true,
		exist: false,
    //pour la snackBar
    visibleSnackBar: false,
    textSnackBar: "Je suis une snackBar",
    //fin de pour la snackBar

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

	this.itemsRefs = firebaseApp.database().ref("Utilisateurs");
	this.envoiRefs = firebaseApp.database().ref("Utilisateurs/"+ "0");


	};

	componentDidMount() {
    	this.listenForItems(this.itemsRefs);
		console.log("mouuuuuuuuuuuunt");

   }

	listenForItems(itemsRef) {
		itemsRef.on('value', (snap) => {

		  // get children as an array
		  var items = [];
		  console.log(snap.val());
		  snap.val().forEach((child) =>{
			items.push({
			  pseudo: child.pseudo,
			  message: child.message,
			  latitude: child.latitude,
			  longitude: child.longitude,
        image: child.image,
			  _key: child.key
			});
		  });
		  console.log(items);


		  items = items.map((item, index) => {
			return {id: index, pseudo: item.pseudo, message: item.message, latitude: item.latitude, longitude: item.longitude, image: item.image};
		  });

		  this.setState({
			dataSource: items
		  });

		});
  }

  _writeElem(message) {
			this.envoiRefs.update({ message }).then((data)=>{
			//success callback
			console.log('data ' , data)
			}).catch((error)=>{
				//error callback
				console.log('error ' , error)
			});

   }

   _snackBar(text) {
     this.setState({visibleSnackBar: true});
     this.setState({textSnackBar: text});
   }


	_changeScreenChat = (pseudoContact) => {
	    this.props.navigation.navigate("Chat", { pseudoContact: pseudoContact });

  }

	_changeScreenContacts = () => {
	this.props.navigation.navigate("Contacts")

  }

	_changeScreenBonus = () => {
	this.props.navigation.navigate("Parameters")

  }

  render() {
	  console.log(this.state.dataSource)

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

				   {this.state.dataSource.map((marker, index) => {
			    return (
			      <MapView.Marker  onPress={() => this._changeScreenChat(marker.pseudo)} key={index} coordinate={{latitude: marker.latitude, longitude: marker.longitude}}>

					  <Image
						style={{width: 50, height:50}}
						source={{uri: 'https://theocvnt.alwaysdata.net/' + marker.image + '.gif'}}
					  />
					  <MapView.Callout style={{minWidth: 150}}>
						<Text style={{fontWeight:'bold'}}>{marker.pseudo}</Text>
						<Text>{marker.message}</Text>
					  </MapView.Callout>
			      </MapView.Marker>
			    );
			  })}

	      </MapView>

        <SnackBar visible={this.state.visibleSnackBar} textMessage={this.state.textSnackBar} actionHandler={()=>{this.setState({visibleSnackBar: false});}} actionText="X"/>

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
				<TextInput style={styles.input} placeholder="..." onChangeText={ (itemName) => this.setState({newItem: itemName}) }/>
				<TouchableOpacity
				style={{height: 50, width: 50}}
				onPress={ () => { this._writeElem(this.state.newItem)}}>
					<Image
					style={{width: 50, height: 50}}
					source={{uri: 'https://theocvnt.alwaysdata.net/send.png'}}
					/>
				</TouchableOpacity>
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
