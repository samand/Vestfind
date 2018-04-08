import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBsKDDTn_ijWfg-KB3sg_YYun9FJc_cICc",
    authDomain: "vestfind-ad2d8.firebaseapp.com",
    databaseURL: "https://vestfind-ad2d8.firebaseio.com",
    projectId: "vestfind-ad2d8",
    storageBucket: "",
    messagingSenderId: "559411766377"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
};