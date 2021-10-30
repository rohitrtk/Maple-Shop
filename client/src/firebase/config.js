import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js";
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCTGOfZROOVUvH11s0LT9hF9aKp10VBF7o",
  authDomain: "maple-shop-16082.firebaseapp.com",
  projectId: "maple-shop-16082",
  storageBucket: "maple-shop-16082.appspot.com",
  messagingSenderId: "954860114046",
  appId: "1:954860114046:web:7667cf567ecd98a352482f",
  measurementId: "G-1J9J83EX9Y"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const projectStorage = firebase.storage();