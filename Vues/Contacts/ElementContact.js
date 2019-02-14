
import React from 'react';
import test from './test'
import { StyleSheet, View, Text, TextInput, Button, FlatList, Image, TouchableOpacity } from 'react-native';


class ElementContact extends React.Component {
  render() {
    const { test, changeScreen } = this.props
    return (
	
		<TouchableOpacity
        style={styles.main_container}
        onPress={() => changeScreen()}>
		<View style={{ flex: 1, backgroundColor: 'white' }}>
		<Image
          style={{height: 100}}
          source={{uri: 'https://theocvnt.alwaysdata.net/applicationImages/wolfo.jpg'}}
        />
		</View>
        <View style={styles.name_container}>
			<View style={styles.right_container}>
			  <Text numberOfLines={1} style={styles.name}>{test.pseudo}</Text>
			</View>
		</View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'row',
	backgroundColor: 'white',
	height: 100,
	marginTop: 15,
	marginBottom: 20,
	marginRight:10,
	marginLeft:10,
	shadowColor: "#000",
	shadowOffset: {
		width: 0,
		height: 5,
	},
	shadowOpacity: 0.36,
	shadowRadius: 6.68,

	elevation: 11,
  },
  left_container: {
	  
  },
  icone: {
    
  },
  right_container: {
	backgroundColor: 'white',
	height: 25,
	marginLeft: 5,
	marginRight: 5
  },
  name_container: {
	flex: 2.5,
	backgroundColor: 'white',
	justifyContent: 'center',
	alignItems: 'center'
  },
  name:{
	fontSize: 20,
	fontWeight:'bold'
  }
});


export default ElementContact
