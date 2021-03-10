import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

const firebaseConfig = {
    apiKey: "AIzaSyDtK6Gx82LtLKV2SDn5OzFR8j_hvS0-xPE",
    authDomain: "clinical-laboratory.firebaseapp.com",
    projectId: "clinical-laboratory",
    storageBucket: "clinical-laboratory.appspot.com",
    messagingSenderId: "984987235423",
    appId: "1:984987235423:web:13328f34ed4417a42d97ea",
    measurementId: "G-7FLK668XLE"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

/* if (window.location.hostname === 'localhost') {
    db.useEmulator('localhost', 7000);
    firebase.functions().useEmulator('localhost', 5001);
} */

db.enablePersistence().catch((err) => {
    if (err.code == 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        // ...
        console.error('failed-precondition');
    } else if (err.code == 'unimplemented') {
        // The current browser does not support all of the
        // features required to enable persistence
        // ...
        console.error('unimplemented');
    } else {
        console.error('other');
    }
});

export { db };

export default firebase;