import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBNiBUXQLOgd-CGLNLdLnjCfEOqUJsv1_4",
    authDomain: "omnihouse-29e8f.firebaseapp.com",
    databaseURL: "https://omnihouse-29e8f-default-rtdb.firebaseio.com",
    projectId: "omnihouse-29e8f",
    storageBucket: "omnihouse-29e8f.appspot.com",
    messagingSenderId: "624683149999",
    appId: "1:624683149999:web:399beaf590c7150b96c25a",
    measurementId: "G-WNBSFNTRHM"
};

firebase.initializeApp(firebaseConfig);

const DB = firebase.firestore();
const usersCollection = DB.collection('users');

export { firebase, usersCollection }