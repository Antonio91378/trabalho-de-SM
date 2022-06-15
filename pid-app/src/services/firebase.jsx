// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAkdDLLswGgrQKwGr1s_K5tvwq6oc7HAXA",
  authDomain: "pid-esp32.firebaseapp.com",
  databaseURL: "https://pid-esp32-default-rtdb.firebaseio.com",
  projectId: "pid-esp32",
  storageBucket: "pid-esp32.appspot.com",
  messagingSenderId: "415348801444",
  appId: "1:415348801444:web:458c38d98a1f47d6788b31",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };
