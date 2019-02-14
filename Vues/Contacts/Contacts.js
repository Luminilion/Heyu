
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
	
	listenForItems(itemsRef){
		itemsRef.on('value', (snap) =>{
		var items=[];
		snap.forEach((child) => {
			items.push({
				title:child.val(),
				_key:child.key
			});
		});
		});
		

		
		
	}
	
	constructor(props){
		super(props);
		this.itemRefs = firebaseApp.database().ref("Utilisateurs/0/Contacts");
	};
	_changeScreen = (idFilm) => {
    console.log("Display film with id " + idFilm)
	    this.props.navigation.navigate("Chat")

  }
  render() {
	  console.log(this.props)
    return (
	
	
     
	 <View style={{ flex: 1, backgroundColor:"green"}}>
	
		<View style={{justifyContent:'center', alignItems:'center', marginTop: 30}}>
			<TextInput placeholder="Rechercher un ami"/>
		</View>
		<FlatList
		  data={test}
		  keyExtractor={(item) => item.id.toString()}
		  renderItem={({item}) => <ElementContact test={item} changeScreen={this._changeScreen}/>}
		/>
		 
	
      </View>
	
     
    )
  }
}




export default Contacts
