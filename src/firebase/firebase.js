import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyDBDTxUedsIpw7cbHWGl_kWmTExsjQVRRk",
    authDomain: "omnihouse-c5518.firebaseapp.com",
    databaseURL: "https://omnihouse-c5518-default-rtdb.firebaseio.com",
    projectId: "omnihouse-c5518",
    storageBucket: "omnihouse-c5518.appspot.com",
    messagingSenderId: "259465446534",
    appId: "1:259465446534:web:57d918310af6133694bd07",
    measurementId: "G-Z10M3RVF79"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const DB = firebase.firestore();
const usersCollection = DB.collection('users');
const propertiesCollection = DB.collection('properties');

export { firebase, usersCollection, propertiesCollection }