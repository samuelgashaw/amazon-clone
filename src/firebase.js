// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCm7eYRC9aliN_BEnqPEdxVfPDO-9kr_xE',
  authDomain: 'clone-a76ff.firebaseapp.com',
  projectId: 'clone-a76ff',
  storageBucket: 'clone-a76ff.appspot.com',
  messagingSenderId: '375733628215',
  appId: '1:375733628215:web:eb332940a79a571692feb2',
  measurementId: 'G-T4BMPHYDJX',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
