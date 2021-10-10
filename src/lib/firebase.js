// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

import { seedDatabase } from '../seed/seed';

const firebaseConfig = {
  apiKey: 'AIzaSyD2ROWk9PPxAZ0p377UqUlN0zS_61AUQwY',
  authDomain: 'disneyplus-clone-64dc4.firebaseapp.com',
  projectId: 'disneyplus-clone-64dc4',
  storageBucket: 'disneyplus-clone-64dc4.appspot.com',
  messagingSenderId: '473150778051',
  appId: '1:473150778051:web:a3264eac77d69712ee5076',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// seedDatabase(firebaseApp);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

// console.log('db', db);
// console.log('auth', auth);
// console.log('storage', storage);

export { auth, provider, storage };
export default db;
