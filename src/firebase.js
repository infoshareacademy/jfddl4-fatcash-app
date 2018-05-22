import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyASuM5gh5aKPjgBr8NSd_ZaCAHO1Rx6pFc",
    authDomain: "fatcash-app.firebaseapp.com",
    databaseURL: "https://fatcash-app.firebaseio.com",
    projectId: "fatcash-app",
    storageBucket: "fatcash-app.appspot.com",
    messagingSenderId: "56830222629"
}

firebase.initializeApp(config)

export const database = firebase.database()

