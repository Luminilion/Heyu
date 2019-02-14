import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList, Image, TouchableHighlight } from 'react-native';


class Connection extends React.Component {
  render() {
    return (
	<View style={styles.main_container}>
		
		<Image
          style={{height: 50, width:50, marginBottom: 30}}
          source={{uri: 'https://theocvnt.alwaysdata.net/applicationImages/bear.jpg'}}
        />
		<View style={styles.informations_container}>
			<View style={styles.input_container}>
				<TextInput style={styles.identification} placeholder='mail/pseudo'/>
			</View>
			<View style={styles.input_container}>
				<TextInput style={styles.identification} placeholder='mot de passe'/>
			</View>
		</View>
		<View style={styles.bouton}>
			<Button style={{color:"red"}} title='Se connecter!' onPress={() => {test()}}/>
		</View>
		<Text style={styles.erreur}>Ton mot de passe ou pseudo/mail est faux!</Text>
		
	</View>
    )
  }
}



const styles = StyleSheet.create({
  main_container: {
	justifyContent: 'center',
	alignItems: 'center',
	flex:1,
  },
  informations_container: {
	backgroundColor: '#4479D4',
	width: 200,
	height:150,
	borderRadius: 10,
	
	shadowColor: "#000",
	shadowOffset: {
		width: 0,
		height: 5,
	},
	shadowOpacity: 0.36,
	shadowRadius: 6.68,

	elevation: 11,

  },
  input_container: {
	flex:1,
	marginTop:30,
	marginBottom:30,
	marginLeft:30,
	marginRight:30,
	height: 25,
	backgroundColor: 'white',
	
	
  },
  identification:{
	flex:1,
	flexWrap: 'wrap',
	backgroundColor: 'white',
	
	
  },
  mdp: {
	  
  },
  bouton:{
	marginTop:30
  },
  erreur:{
	marginTop:30,
	color: 'red'
  }
});

export default Connection
