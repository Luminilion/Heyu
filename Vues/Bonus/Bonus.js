/*
  Component describing lists of bonuses the user can activate.
  Active and Unlocked bonuses are fetched from Firebase
*/

//moi j'aime bien cette couleur: #17032a
import React from 'react';
import test from './test';
import { StyleSheet, View, FlatList, Image, ImageBackground } from 'react-native';

/*
  Component rendering the bonus list
*/
class Bonus extends React.Component {

  // Renders the bonus list
  render() {
    return (

  	 <View style={{ flex: 1, backgroundColor:"#43057e"}}>
  	  <ImageBackground style={{width: '100%', height: '100%'}} source={{uri: 'https://theocvnt.alwaysdata.net/applicationImages/cerf.jpg'}}>
    		<FlatList
    		  numColumns={4}
    		  contentContainerStyle={styles.list}
    		  data={test}
    		  keyExtractor={(item) => item.id.toString()}
    		  renderItem={({item}) =>  <Image style={{margin: 30, height:40, width:40}} source={{uri: 'https://theocvnt.alwaysdata.net/applicationImages/question-mark.png'}} />}
    		/>
    	</ImageBackground>
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
