/*
  Login screen handling login logic and display.
*/

// Imports
import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from 'firebase'

// Login component
export default class Login extends React.Component {

  // Saves input email and password and possible error message
  state = { email: '', password: '', errorMessage: null }

  // Handles login logic
  handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(
    error => {
        this.setState({ errorMessage : error.message})
    });
  }

  // Handles visual rendering
  render() {
    return (

      <View style={styles.container}>

        <Text>Login</Text>

        <Text style={{ color: 'red' }}>
          {this.state.errorMessage}
        </Text>

        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          //value={this.state.email}
        />

        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />

        <Button title="Login" onPress={this.handleLogin} />

        <Button
          title="Don't have an account? Sign Up"
          onPress={() => this.props.navigation.navigate('SignUp')}
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