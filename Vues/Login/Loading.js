/*
  Loading screen with underlying authenticating logic.
  Loading screen checks if user is authenticated or not, if user is then flow is directed towards main.
  If user is not authenticated then flow is directed towards login.
*/

// Imports
import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from "firebase";

// TO REMOVE : here was firebase config and initializeApp

// Loading Component handling authentication logic
export default class Loading extends React.Component {

  // Renders loading animation to be displayed while the app is checking authentication
  render() {
    return (
      <View style={styles.container}>

        <Text>Loading</Text>
        <ActivityIndicator size="large" />

      </View>
    )
  }

  // Checks if user is authenticated as soon as components finished to mount
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'AppNavigationStack' : 'LoginNvaigationStack')
    })
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})