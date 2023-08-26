import firebase from "firebase/app";
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBH7HIPOOx0nwTuGNSgoN05kcp0YhQs9uw",
    authDomain: "chatgram-fa4c3.firebaseapp.com",
    projectId: "chatgram-fa4c3",
    storageBucket: "chatgram-fa4c3.appspot.com",
    messagingSenderId: "1068765538341",
    appId: "1:1068765538341:web:2d78e417b8f60056e8f7cc"
  }).auth();