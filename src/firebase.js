import firebase from 'firebase';

const config = {
  // apiKey: 'AIzaSyBwwffZl09OqzQvu9GtOynqibef2Qh8dXc',
  // authDomain: 'test-db-e095e.firebaseapp.com',
  // databaseURL: 'https://test-db-e095e.firebaseio.com',
  // projectId: 'test-db-e095e',
  // storageBucket: 'test-db-e095e.appspot.com',
  // messagingSenderId: '182747176288'
  apiKey: "AIzaSyBa8S5n6cXgzOQ9UGEp7_w5Gvkcsb_f0DA",
  authDomain: "jewellery-41ab6.firebaseapp.com",
  databaseURL: "https://jewellery-41ab6.firebaseio.com",
  projectId: "jewellery-41ab6",
  storageBucket: "jewellery-41ab6.appspot.com",
  messagingSenderId: "317897449700"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const messaging = firebase.messaging();