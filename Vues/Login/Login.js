/*
  Login screen handling login logic and display.
*/

// Imports
import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from 'firebase'
import SnackBar from 'react-native-snackbar-component'

// Login component
export default class Login extends React.Component {

  // Saves input email and password and possible error message
  state = { email: '', password: '', errorMessage: null, confirmResetVis : false }

  // Handles login logic
  handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(
    error => {
        this.setState({ errorMessage : error.message})
    });
  }

  componentWillMount() {
    // Check because non working
    const confirmReset = this.props.navigation.getParam('confirmReset', false);
    console.log('confirmReset value is ' + confirmReset);
    if (confirmReset && !this.state.confirmResetVis) {
      console.log('Enterd confirmReset');
      this.setState( {confirmResetVis : true} );
      setTimeout(() => {this.setState({confirmResetVis: false})}, 10000);
    }
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
          textContentType="emailAddress"
          keyboardType='email-address'
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

        <Button
          title='Forgot your password ?'
          onPress={() => this.props.navigation.navigate('PasswordReset')}
        />

        <SnackBar visible={this.state.confirmResetVis} textMessage='Email successfully sent !' actionHandler={()=>{this.setState({confirmResetVis: false});}} actionText="X"/>
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
