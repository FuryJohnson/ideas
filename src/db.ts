import firebase from 'firebase/app'
import 'firebase/firestore'


firebase.initializeApp({
    apiKey: "AIzaSyAuJ0OriCTtea6j5CGtR1JEwLEIgGKiok8",
    authDomain: "covadeas.firebaseapp.com",
    databaseURL: "https://covadeas-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "covadeas",
    storageBucket: "covadeas.appspot.com",
    messagingSenderId: "65559468802",
    appId: "1:65559468802:web:7ce7f4cdc2afcf96fe801b"
})


export const db = firebase.firestore()

