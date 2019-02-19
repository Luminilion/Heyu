/*
  Screen for the password reset
*/

// Imports
import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from 'firebase'

// Login component
export default class PasswordReset extends React.Component {

  // Saves input email and possible error message
  state = { email: '', errorMessage: null }

  // Handles reset logic
  handleReset = () => {
    firebase.auth().sendPasswordResetEmail(this.state.email).then(
      // Display message
      this.props.navigation.navigate('Login', {confirmReset : true})
    ).catch(
    error => {
        this.setState({ errorMessage : error.message})
    });
  }

  // Handles visual rendering
  render() {
    return (

      <View style={styles.container}>

        <Text>Please enter email address to recover password :</Text>

        <Text style={{ color: 'red' }}>
          {this.state.errorMessage}
        </Text>

        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          textContentType="emailAddress"
          keyboardType='email-address'
          //value={this.state.email}
        />

        <Button title="Ok" onPress={this.handleReset} />

        <Button
          title="Cancel"
          onPress={() => this.props.navigation.navigate('Login')}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})
