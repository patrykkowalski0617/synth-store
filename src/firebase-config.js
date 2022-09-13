import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'synth-store.firebaseapp.com',
  projectId: 'synth-store',
  storageBucket: 'synth-store.appspot.com',
  messagingSenderId: '280248491810',
  appId: '1:280248491810:web:28523086ce166e23af4f7b',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
