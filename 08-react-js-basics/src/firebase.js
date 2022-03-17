import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAjY8hTiZdCgWgcQc-_wv8FLAY0lpVSl6o",
    authDomain: "geekbrains-react-app.firebaseapp.com",
    databaseURL: "https://geekbrains-react-app-default-rtdb.firebaseio.com",
    projectId: "geekbrains-react-app",
    storageBucket: "geekbrains-react-app.appspot.com",
    messagingSenderId: "839744136136",
    appId: "1:839744136136:web:33601d3f9d1a09316e16fd"
};

firebase.initializeApp(firebaseConfig);