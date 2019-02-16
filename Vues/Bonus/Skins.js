/*
  Component describing lists of skins the user can select.
  Active and Unlocked bonuses are fetched from Firebase.
*/

import React from 'react';
import test from './test';
import { StyleSheet, View, FlatList, Image, ImageBackground } from 'react-native';

/*
  Component rendering the skin list
*/
class Bonus extends React.Component {

  // Renders the skin list
  render() {
    return (

  	 <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
  		<FlatList
  		  numColumns={4}
  		  contentContainerStyle={styles.list}
  		  data={test}
  		  keyExtractor={(item) => item.id.toString()}
  		  renderItem={({item}) =>  <Image style={{margin: 30, height:40, width:40}} source={{uri: 'https://theocvnt.alwaysdata.net/applicationImages/question-mark.png'}} />}
  		/>
    </View>


    )
  }
}

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'column',
	alignItems: 'center'

  }
});

export default Bonus
