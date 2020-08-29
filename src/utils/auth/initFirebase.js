import firebase from "firebase/app";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDMkJJdCrQ1nU5xky1fBnSY7lMCoNme-BI",
    authDomain: "web-example-48e05.firebaseapp.com",
    databaseURL: "https://web-example-48e05.firebaseio.com",
    projectId: "web-example-48e05",
    storageBucket: "web-example-48e05.appspot.com",
    messagingSenderId: "601812719942",
    appId: "1:601812719942:web:52a6666cd95f73a1086d47",
    measurementId: "G-T1470Q9SJC",
};

export default function initFirebase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
}
