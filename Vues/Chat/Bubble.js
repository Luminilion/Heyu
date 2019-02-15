import React from 'react';
import test from './test';
import { StyleSheet, View, Text, TextInput, Button, FlatList } from 'react-native';


class bubbleMe extends React.Component {
  render() {
	  
	const { test, ordre } = this.props
	
	console.log("là on est dans le bubble et ordre : "+ordre)
	if(ordre==false){

	
		if(test.sender==1){
		return (
		
		
		<View style={styles.bubbleMe}>
			<Text style={styles.message} >{test.texte}</Text>
		</View>
		
		
		 
		)
		}
		else{
		return(
		<View style={styles.bubbleShe}>
			<Text style={styles.message} >{test.texte}</Text>
		</View>
		)
		}
		
	}
	
	else{
		
		if(test.sender==0){
		return (
		
		
		<View style={styles.bubbleMe}>
			<Text style={styles.message} >{test.texte}</Text>
		</View>
		
		
		 
		)
		}
		else{
		return(
		<View style={styles.bubbleShe}>
			<Text style={styles.message} >{test.texte}</Text>
		</View>
		)
		}
		
	}
	
  }
}

const styles = StyleSheet.create({
  bubbleMe:{
	marginTop: 30,
	marginLeft:50,
	minHeight: 25,
	minWidth: 150,
	padding: 5,
	backgroundColor : 'orange',
	borderBottomLeftRadius: 8
  },
  bubbleShe:{
	marginTop: 30,
	marginRight:50,
	minHeight: 25,
	padding: 5,
	backgroundColor : 'green',
	borderBottomRightRadius: 8,
	alignItems: 'flex-end'
  },
  message:{
	flexWrap:'wrap'
  }
})

export default bubbleMe