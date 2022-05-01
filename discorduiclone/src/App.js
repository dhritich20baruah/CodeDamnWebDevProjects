import './App.css';
import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
   <BrowserRouter>
   <Nav/>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="Login" element={<Login/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
