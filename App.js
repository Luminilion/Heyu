import React from 'react';

import Contacts from './Vues/Contacts/Contacts';
import Connection from './Vues/Connection/Connection';
import Bonus from './Vues/Bonus/Bonus';
import Chat from './Vues/Chat/Chat';
import Map from './Vues/Map/Map';
import Navigation from './Navigation/Navigation';
import test from './Vues/Contacts/test';
import * as firebase from 'firebase';
import { StyleSheet, Text, View, FlatList, ListView } from 'react-native';


export default class App extends React.Component {
	


  render() {
    return (
	  
	  <Navigation/>
	  
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
});



