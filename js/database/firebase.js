// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyAbwGzPz9GGgJPorpbV0fKaLvyHrwWGzAI",
  authDomain: "pokefantasy-wiki.firebaseapp.com",
  projectId: "pokefantasy-wiki",
  storageBucket: "pokefantasy-wiki.appspot.com",
  messagingSenderId: "925172780286",
  appId: "1:925172780286:web:d721f904377662a7b529af",
  measurementId: "G-MCS0LZDHV4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { getDatabase, ref, set };
