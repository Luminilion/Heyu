// Imports
import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from "firebase"
import firebaseApp from '../../firebase';

export default class Parameters extends React.Component {

	constructor(props) {
	  super(props);

		let user = firebase.auth().currentUser;

	  this.state = {
			user: user? user : null,
			name: user? user.displayName : null,
			email: user? user.email : ''
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>
					Hi {this.state.name ? this.state.name : this.state.email} !
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
