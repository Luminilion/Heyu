import React from 'react';
import test from './test';
import Bubble from './Bubble';
import * as firebase from 'firebase';
import firebaseApp from '../../firebase';

import { StyleSheet, View, Text, TextInput, Button, FlatList, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';



class Chat extends React.Component {
	
constructor(props){
		super(props);
		this.state = {
	  	dataSource: [{ id: 0, sender: 0, texte: 'Ecris lui un message'}], 
	  	dialogVisible: false,
	  	newItem: 'Invalid Item',
		ordre: true,
	  };
	  
	  this.itemsRefs = firebaseApp.database().ref("Discussions");
	  this.envoiRefs = firebaseApp.database().ref("Discussions/BobbyGerard");
		
	};
	
	
componentDidMount() {
    	this.listenForItems(this.itemsRefs);
		console.log("mouuuuuuuuuuuunt");
		console.log(this.state.ordre);
	
   }	
	
listenForItems(itemsRef) {
	
	itemsRef.on('value', (snap) => {
		var nomPremierOrdre = "Bobby"+this.props.navigation.getParam('pseudoContact');
		var nomDeuxiemeOrdre = this.props.navigation.getParam('pseudoContact');+"Boby";
		this.setState({ordre:false});
		console.log("alors là le state de ordre c'est " + this.state.ordre);
		
		if(snap.val()[nomPremierOrdre]!=undefined){ 
			
			
		
		console.log("le snap est" + snap.val()[nomPremierOrdre]);
		
		
		  // get children as an array
		  var items = [];
		  snap.val()[nomPremierOrdre].forEach((child) =>{
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
		
		else{
			if(snap.val()[nomDeuxiemeOrdre]!=undefined){ 
			console.log("le snap est" + snap.val()[nomDeuxiemeOrdre]);
		
		
			  // get children as an array
			  var items = [];
			  snap.val()[nomDeuxiemeOrdre].forEach((child) =>{
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
			
		}
		
		  this.setState({
			dataSource: items
		  });
		  
	

		});
	
}

_writeElem(sender, texte) {
		this.envoiRefs.push({ sender, texte }).then((data)=>{
			//success callback
			console.log('data ' , data)
		}).catch((error)=>{
			//error callback
			console.log('error ' , error)
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
			<TextInput style={styles.input} placeholder="..." onChangeText={ (itemName) => this.setState({newItem: itemName}) }/>
			<TouchableOpacity
		    style={{height: 50, width: 50}}
			onPress={ () => { this._writeElem(0, this.state.newItem)}}>
				<Image
				style={{width: 50, height: 50}}
				source={{uri: 'https://theocvnt.alwaysdata.net/send.png'}}
				/>
			</TouchableOpacity>
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