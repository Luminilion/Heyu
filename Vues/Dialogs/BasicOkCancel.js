/*
  Screen used to create a basic Ok Cancel dialog wih custom title and description
*/

// Imports
import React from 'react'
import Dialog from 'react-native-dialog'

/*ReAuth component
  Props are :
    function cancelFunc for end of Dialog
    function okFunc for ok (user agreed) end of Dialog
    boolean visible for dialog's visibility
    string title
    string description
*/
export default class Login extends React.Component {

  // Handles visual rendering
  render() {
    return (
      <Dialog.Container visible={this.props.visible}>
        <Dialog.Title>{this.props.title}</Dialog.Title>
        <Dialog.Description>{this.props.description}</Dialog.Description>

        <Dialog.Button label='Ok' onPress={this.props.okFunc} />
        <Dialog.Button label='Cancel' onPress={ this.props.cancelFunc } bold={true} />
      </Dialog.Container>
    )
  }
}
