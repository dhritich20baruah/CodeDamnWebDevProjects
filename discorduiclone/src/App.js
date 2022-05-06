import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignup from './components/LoginSignup';
import Home from './components/Home';

function App() {
  return (
   <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="LoginSignup" element={<LoginSignup/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
