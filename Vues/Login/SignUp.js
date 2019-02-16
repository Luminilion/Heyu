/*
  Screen for the unidentified user to register to the application.
  Only current way to register is through mail + password.
  Possibility to add more register ways through https://firebase.google.com/docs/auth/web/start
*/

// Imports
import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from 'firebase'

/*
  Signup class : renders signup and handles signup logic
*/
export default class SignUp extends React.Component {

  // saves input email, password and possible signup error message
  state = { email: '', password: '', errorMessage: null }

  // Handles signup logic
  handleSignUp = () => {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(error => {
      this.setState({errorMessage : error.message})
    });
  }

// Renders visual of screen
render() {
    return (

      <View style={styles.container}>

        <Text>Sign Up</Text>

        <Text style={{ color: 'red' }}>
          {this.state.errorMessage}
        </Text>

        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          textContentType="emailAddress"
          keyboardType='email-address'
          //value={this.state.email}
        />

        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          //value={this.state.password}
        />

        <Button title="Sign Up" onPress={this.handleSignUp} />

        <Button
          title="Already have an account? Login"
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
