import firebase from 'firebase';
//import * as firebase from 'firebase';



var firebaseConfig = {
    apiKey: "AIzaSyD6JZSpZl92Pncrj80EczOFTSGc5UlJ4rI",
    authDomain: "ecommerce-b6d40.firebaseapp.com",
    databaseURL: "https://ecommerce-b6d40.firebaseio.com",
    projectId: "ecommerce-b6d40",
    storageBucket: "ecommerce-b6d40.appspot.com",
    messagingSenderId: "350194828997",
    appId: "1:350194828997:web:3bce5acd7587c0694992ac"
  };
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
firebase.auth = firebase.auth();
firebase.db = db;

export default firebase;