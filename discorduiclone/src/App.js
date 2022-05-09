import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignup from './components/LoginSignup';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Server1 from './components/Server1';

function App() {
  return (
   <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="LoginSignup" element={<LoginSignup/>}/>
      <Route path="Dashboard" element={<Dashboard/>}/>
      <Route path="Server1" element={<Server1/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
