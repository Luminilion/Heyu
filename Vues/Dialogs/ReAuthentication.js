/*
  Screen used to re-authenticate user in case of important account action.
*/

// Imports
import React from 'react'
import firebase from 'firebase'
import Dialog from 'react-native-dialog'

/*ReAuth component
  Props are :
    function onCancel for end of Dialog
    boolean visible for dialog's visibility
*/
export default class Login extends React.Component {

  // Saves input email and password and possible error message
  state = { email: '', password: '', errorMessage: '' }

  // ReAuth the user
  reAuth = () => {

    const user = firebase.auth().currentUser;
    const credentials = firebase.auth.EmailAuthProvider.credential(
      this.state.email,
      this.state.password
    );

    user.reauthenticateAndRetrieveDataWithCredential(credentials).then(
      this.props.onOk
    ).catch(error => {
      this.setState({ errorMessage : error.message })
    });

  }

  // Handles visual rendering
  render() {
    return (
      <Dialog.Container visible={this.props.visible}>
        <Dialog.Title>Re-authentication</Dialog.Title>
        <Dialog.Description>To procede, please re-authenticate.</Dialog.Description>
        <Dialog.Description color='red'>{this.state.errorMessage}</Dialog.Description>
        <Dialog.Input
          label='Email'
          onChangeText={
            email => this.setState({ email })
          }
        />
        <Dialog.Input
          label='Password'
          onChangeText={
            password => this.setState({ password })
          }
          secureTextEntry
        />
        <Dialog.Button label='Ok' onPress={this.reAuth} />
        <Dialog.Button label='Cancel' onPress={this.props.onCancel} />
      </Dialog.Container>
    )
  }
}
