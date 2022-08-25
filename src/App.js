//import './App.css'; // Using tailwind -- App.css not included
// React components
import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client'
import Content from './pages/Content';

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
    <div className="bg-gradient-to-b from-zinc-800 via-zinc-800 to-zinc-900 text-slate-100 h-screen">
      <Content />
    </div>
  );
}

export default App;