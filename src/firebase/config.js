import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  databaseURL:
    "https://speakly-a80ed-default-rtdb.europe-west1.firebasedatabase.app/",
  apiKey: "AIzaSyCUZfhgoPLSD-hLTfNewxseafnrBoHkAYU",
  authDomain: "speakly-a80ed.firebaseapp.com",
  projectId: "speakly-a80ed",
  storageBucket: "speakly-a80ed.firebasestorage.app",
  messagingSenderId: "205818531628",
  appId: "1:205818531628:web:36cafe838da99510572689",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
