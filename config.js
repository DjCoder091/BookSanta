import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyB1OQYwwD5jeaeF51A-H-XaXLqS3kNHfKw",
  authDomain: "booksanta-1-8a791.firebaseapp.com",
  projectId: "booksanta-1-8a791",
  storageBucket: "booksanta-1-8a791.appspot.com",
  messagingSenderId: "1095581051998",
  appId: "1:1095581051998:web:ee33d6069e0cf6a54958cf",
  measurementId: "G-ERBFTPRN7V"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase.firestore();
