import { initializeApp } from 'firebase/app';
import { getFirestore }  from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyACIZOahXHQD5xK9a814VS-oDb5EzDz1so",
  authDomain: "maple-shop-e62ee.firebaseapp.com",
  projectId: "maple-shop-e62ee",
  storageBucket: "maple-shop-e62ee.appspot.com",
  messagingSenderId: "623727036403",
  appId: "1:623727036403:web:6e8318bbcf188b73ab7486"
};

initializeApp(firebaseConfig);

const pStorage = getStorage();
const pFirestore = getFirestore();

export { pStorage, pFirestore };
