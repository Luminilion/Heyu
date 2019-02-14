
//moi j'aime bien cette couleure: #17032a
import React from 'react';
import test from './test';
import * as firebase from 'firebase';
import ElementContact from './ElementContact';
import { Dimensions, StyleSheet, View, Text, TextInput, Button, FlatList, ImageBackground } from 'react-native';

const firebaseConfig = {
    apiKey: "AIzaSyBHFwLIieJmVzXzorVj3OnlsDQlwTPjsfU",
    authDomain: "socialmap2-135c6.firebaseapp.com",
    databaseURL: "https://socialmap2-135c6.firebaseio.com",
    projectId: "socialmap2-135c6",
    storageBucket: "socialmap2-135c6.appspot.com",
    messagingSenderId: "476015574242"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);


class Contacts extends React.Component {
	
	constructor(props){
		super(props);
		this.itemsRefs = firebaseApp.database().ref("Utilisateurs");
		this.state = {
	  	dataSource: [{ id: 0, pseudo: 'Pizza' }], 
	  	dialogVisible: false,
	  	newItem: 'Invalid Item'
	  };
		
	};
	
	componentDidMount() {
    	this.listenForItems(this.itemsRefs);
   }
	
	listenForItems(itemsRef) {
		itemsRef.on('value', (snap) => {

		  // get children as an array
		  var items = [];
		  console.log(snap.val()[0].Contacts);
		  snap.val()[0].Contacts.forEach((child) =>{
			items.push({
			  pseudo: child.pseudo,
			  _key: child.key
			});
		  });
		  console.log(items);

		  
		  items = items.map((item, index) => {
			return {id: index, pseudo: item.pseudo};
		  });

		  this.setState({
			dataSource: items
		  });

		});
  }
   
	_changeScreen = () => {
	    this.props.navigation.navigate("Chat")

  }
  
  render() {
	  console.log(this.props)
	  
    return (
	
	
     
	 <View style={{ flex: 1,}}>
	
		<View style={{justifyContent:'center', alignItems:'center', marginTop: 30}}>
			<TextInput placeholder="Rechercher un ami"/>
		</View>
		
			
		<FlatList
		  data={this.state.dataSource}
		  keyExtractor={(item) => item.id.toString()}
		  renderItem={({item}) => <ElementContact test={item} changeScreen={this._changeScreen}/>}
		/>
		 
	
      </View>
	
     
    )
  }
}




export default Contacts
