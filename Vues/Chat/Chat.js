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
		exist: false,
	  };
	  
	  this.itemsRefs = firebaseApp.database().ref("Discussions");
	  this.envoiRefsPremierOrdre = firebaseApp.database().ref("Discussions/" + "Bobby" + this.props.navigation.getParam('pseudoContact'));
	  this.envoiRefsDeuxiemeOrdre = firebaseApp.database().ref("Discussions/" + this.props.navigation.getParam('pseudoContact') + "Bobby" );
		
	};
	
	
componentDidMount() {
    	this.listenForItems(this.itemsRefs);
		console.log("mouuuuuuuuuuuunt");
		console.log(this.state.ordre);
	
   }	
	
listenForItems(itemsRef) {
	
	itemsRef.on('value', (snap) => {
		var nomPremierOrdre = "Bobby"+this.props.navigation.getParam('pseudoContact');
		var nomDeuxiemeOrdre = this.props.navigation.getParam('pseudoContact')+"Bobby";
		var nom="";

		
		if(snap.val()[nomPremierOrdre]==undefined){ 
			nom=nomDeuxiemeOrdre;
			this.setState({ordre:false});
		}
		else{
			nom=nomPremierOrdre;
			this.setState({ordre:true});
		}
		console.log("Le nom de la liste c'est" + nom);
		if(snap.val()[nom]!=undefined){
		
		this.setState({exist:true});
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
		else{
			this.setState({exist:false});
		}
		
		
		  this.setState({
			dataSource: items
		  });
		  
	

		});
	
}

_writeElem(sender, texte) {
	
		
		
		var length = 0;
		
		if(this.state.exist==true){
			length=this.state.dataSource.length;;
		}
		
		if(this.state.ordre==true){
			console.log("c'est qui?");
			sender=0;
			this.envoiRefsPremierOrdre.child(length).set({ sender, texte }).then((data)=>{
			//success callback
			console.log('data ' , data)
			}).catch((error)=>{
				//error callback
				console.log('error ' , error)
			});
		}
		else{
			console.log("c'est John?");
			sender=1;
			this.envoiRefsDeuxiemeOrdre.child(length).set({ sender, texte }).then((data)=>{
			//success callback
			console.log('data ' , data)
			}).catch((error)=>{
				//error callback
				console.log('error ' , error)
			});
			
		}
		
   }
  
  render() {
	  
	  console.log("là c'est dans render et ordre: " + this.state.ordre)
	  
    return (
	
     
	 <KeyboardAvoidingView style={styles.main_container} behavior="padding" enabled>
		<View style={styles.nom_container}>
			<Text style={styles.nom}>{this.props.navigation.getParam('pseudoContact')}</Text>
		</View>
		<FlatList
		
		  data={this.state.dataSource}
		  keyExtractor={(item) => item.id.toString()}
		  renderItem={({item}) => <Bubble test={item} ordre={this.state.ordre}/>}
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