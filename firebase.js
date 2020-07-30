import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBGvDWfmx7KCEoP2VI7H0Em0AJOQ8Ha400',
  authDomain: 'clone-96772.firebaseapp.com',
  databaseURL: 'https://clone-96772.firebaseio.com',
  projectId: 'clone-96772',
  storageBucket: 'clone-96772.appspot.com',
  messagingSenderId: '147376169345',
  appId: '1:147376169345:web:fba84c055832ffae514880',
  measurementId: 'G-QJGZY6CSJX',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
