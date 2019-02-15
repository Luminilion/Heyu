/*
	First called JS file. Contains the launch logic.
*/

// Imports
import React from 'react';
import Navigation from './Navigation/Navigation';

// Component to be called on the launch of the app
export default class App extends React.Component {

	// Renders the chosen component
  render() {
    return (
	  <Navigation/>
    );
  }
}
