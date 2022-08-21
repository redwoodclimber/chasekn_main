//import './App.css'; // Using tailwind -- App.css not included
// React components
import React, { useRef, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';

// Firebase (v9 modular)
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDolnvqXyWNg6Um3ZjKC2Dnr_dryr3rOig",
  authDomain: "chasekn-main.firebaseapp.com",
  projectId: "chasekn-main",
  storageBucket: "chasekn-main.appspot.com",
  messagingSenderId: "96593648457",
  appId: "1:96593648457:web:1e7d038161e7bb5f48d898",
  measurementId: "G-YR1FYQER9L"
};

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);


function App() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center mt-16">
        <h1 className="text-4xl text-center">Tailwind CSS makes styling React components easier!</h1>
        <button className="bg-black text-white p-2.5 w-fit mt-9">Get Started</button>
      </div>
    </div>
  );
}

export default App;
