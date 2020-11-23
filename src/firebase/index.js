import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAajfjWMvkeQOmcP0wrG89y3wSiEkph6Hw",
    authDomain: "clone-c32e4.firebaseapp.com",
    databaseURL: "https://clone-c32e4.firebaseio.com",
    projectId: "clone-c32e4",
    storageBucket: "clone-c32e4.appspot.com",
    messagingSenderId: "337586569218",
    appId: "1:337586569218:web:cfb6cf2a9276456b41671b",
    measurementId: "G-5E4HCLRGGH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };