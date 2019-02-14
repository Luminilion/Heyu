import React from 'react';
import test from './test';
import Bubble from './Bubble';
import * as firebase from 'firebase';
import firebaseApp from '../../firebase';

import { StyleSheet, View, Text, TextInput, Button, FlatList, Image, KeyboardAvoidingView } from 'react-native';



class Chat extends React.Component {
	
constructor(props){
		super(props);
		this.itemsRefs = firebaseApp.database().ref("Discussions");
		this.state = {
	  	dataSource: [{ id: 0, sender: 0, texte: 'Ecris lui un message'}], 
	  	dialogVisible: false,
	  	newItem: 'Invalid Item'
	  };
		
	};
	
	
componentDidMount() {
    	this.listenForItems(this.itemsRefs);
	
   }	
	
listenForItems(itemsRef) {
	
	itemsRef.on('value', (snap) => {
		var nom = "Bobby"+this.props.navigation.getParam('pseudoContact');
		
		if(snap.val()[nom]!=undefined){
			
			
		
		console.log("le snap est" + snap.val()[nom]);
		
		
		  // get children as an array
		  var items = [];
		  snap.val()[nom].forEach((child) =>{
			items.push({
			  sender: child.sender,
			  texte: child.texte,
			  _key: child.key
			});
		  });

		  
		  items = items.map((item, index) => {
			return {id: index, sender: item.sender, texte: item.texte};
		  });

		}
		  this.setState({
			dataSource: items
		  });
		  
	

		});
		

		
		
		
}
  
  render() {
	  

	  
    return (
	
     
	 <KeyboardAvoidingView style={styles.main_container} behavior="padding" enabled>
		<View style={styles.nom_container}>
			<Text style={styles.nom}>{this.props.navigation.getParam('pseudoContact')}</Text>
		</View>
		<FlatList
		
		  data={this.state.dataSource}
		  keyExtractor={(item) => item.id.toString()}
		  renderItem={({item}) => <Bubble test={item}/>}
		/>
		<View style={styles.barre_message}>
			<TextInput style={styles.input} placeholder="..."/>
			<Image
            style={{width: 50}}
            source={{uri: 'https://theocvnt.alwaysdata.net/send.png'}}
			/>
		</View>
		
     </KeyboardAvoidingView>
	
     
    )
  }
}

const styles = StyleSheet.create({
  nom_container:{
	alignItems:'center'
  },
  nom:{
	fontWeight:'bold',
	fontSize: 16
  },
  main_container: {
	flex:1,
	paddingTop:50
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
})

export default Chat