import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBHFwLIieJmVzXzorVj3OnlsDQlwTPjsfU",
    authDomain: "socialmap2-135c6.firebaseapp.com",
    databaseURL: "https://socialmap2-135c6.firebaseio.com",
    projectId: "socialmap2-135c6",
    storageBucket: "socialmap2-135c6.appspot.com",
    messagingSenderId: "476015574242"
  };

export default !firebase.apps.length ?
firebase.initializeApp(config) : firebase.app();