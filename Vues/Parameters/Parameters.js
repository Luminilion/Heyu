// Imports
import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet, Button } from 'react-native'
import firebase from "firebase"
import firebaseApp from '../../firebase'
import Dialog from 'react-native-dialog'
import ReAuthDialog from '../Dialogs/ReAuthentication'
import BasicDialog from '../Dialogs/BasicOkCancel'
import Swiper from 'react-native-animated-swiper'
import Bonuses from '../Bonus/Bonus'
import Skins from '../Bonus/Skins'

export default class Parameters extends React.Component {

	constructor(props) {
	  super(props);

		let user = firebase.auth().currentUser;

	  this.state = {
			user: user? user : null,
			name: user? user.displayName : null,
			email: user? user.email : '',
			errorMessage : '',
			deleteDialogVisibility : false,
			deleteDialogErrorMessage : '',
			reAuthDialVis : false
		};

	}


	// Handles signout logic
	signOut = () => {
		firebase.auth().signOut().then(
			this.props.navigation.navigate('Loading')
		).catch(
			error => this.setState({errorMessage : error.message})
		)
	}

	//Switch to confirmation fragment
	confirmDelete = () => {
		this.setState({ deleteDialogVisibility : false });
		this.setState({ reAuthDialVis : true });
	}

	// Delete account
	deleteAccount = () => {

		firebase.auth().currentUser.delete().then(() => {
			this.props.navigation.navigate('Loading');
		}).catch( error => {
			this.setState({ deleteDialogErrorMessage : error.message });
		})

	}

	// Hides delete dialog
	hideDialog = () => {
		this.setState({ deleteDialogVisibility: false})
	}

	// Shows delete Dialog
	showDialog = () => {
		this.setState({ deleteDialogVisibility : true })
	}

	// Renders the visual
	render() {

		//// TODO: Set change user email + set user's name + change user password + reset password
		return (
			<View style={styles.container}>

				<BasicDialog
					visible={ this.state.deleteDialogVisibility }
					title='Warning'
					description='Do you really want to delete your account. This cannot be undone.'
					okFunc = {this.confirmDelete}
					cancelFunc = {this.hideDialog}
				/>

				<ReAuthDialog
					onCancel={ ()=>{
						this.setState({reAuthDialVis : false});
						this.props.navigation.navigate('Loading');
					} }
					onOk={this.deleteAccount}
					visible={ this.state.reAuthDialVis}
				/>

				<Text style={{marginTop:35, marginBottom:25}}>
					Hi {this.state.name ? this.state.name : this.state.email} !
				</Text>

				<Swiper dots dotsBottom={20}>
					<View style={styles.slide}>
						<Text style={{color: 'red'}}>
							{this.state.errorMessage}
						</Text>
						<Button
							title='Sign out'
							onPress={this.signOut}
						/>
						<Button
							title='Delete Account'
							color='red'
							onPress={ this.showDialog }
						/>
					</View>

					<View style={styles.slide}>
						<Bonuses />
					</View>

					<View style={styles.slide}>
						<Skins />
					</View>
				</Swiper>

			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
	slide: { alignItems: 'center', flex: 1, justifyContent: 'center' }
})
