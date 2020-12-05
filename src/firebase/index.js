import firebase from 'firebase'

const firebaseConfig = {
//    Your Firebase Config Object Goes Here....
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
