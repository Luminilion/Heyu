import React from 'react';
import test from './test';
import Bubble from './Bubble';
import { StyleSheet, View, Text, TextInput, Button, FlatList, Image, KeyboardAvoidingView } from 'react-native';


class Chat extends React.Component {
  render() {
	
    return (
	
     
	 <KeyboardAvoidingView style={styles.main_container} behavior="padding" enabled>
		<View style={styles.nom_container}>
			<Text style={styles.nom}>Boby</Text>
		</View>
		<FlatList
		
		  data={test}
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