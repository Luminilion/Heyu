
//moi j'aime bien cette couleure: #17032a
import React from 'react';
import test from './test';
import * as firebase from 'firebase';
import firebaseApp from '../../firebase';
import ElementContact from './ElementContact';
import { Dimensions, StyleSheet, View, Text, TextInput, Button, FlatList, ImageBackground } from 'react-native';

class Contacts extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
	  	dataSource: [{ id: 0, pseudo: 'Pizza' }], 
	  	dialogVisible: false,
	  	newItem: 'Invalid Item'
	  };
	  
	  this.itemsRefs = firebaseApp.database().ref("Utilisateurs");
		
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
   
	_changeScreen = (pseudoContact) => {
	    this.props.navigation.navigate("Chat", { pseudoContact: pseudoContact });

  }
  
  render() {
	  
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
