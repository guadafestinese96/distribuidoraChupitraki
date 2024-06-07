import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA_s5u2z7Oc2evgluclV46e5Ren11YO1ww",
  authDomain: "chupitrakidata.firebaseapp.com",
  projectId: "chupitrakidata",
  storageBucket: "chupitrakidata.appspot.com",
  messagingSenderId: "880782977910",
  appId: "1:880782977910:web:00f598b3e3b99aaad26857"
};


const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
