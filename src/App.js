import './App.css';
import Logo from './Logo.js';
import Start from './Start.js';
import Footer from './Footer';
import Nav from './Nav';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Insurance from './Insurance';
import Contact from './Contact';
import History from './History';
import Models from './Models';
import React from 'react';

function App() {
  
  return (
    <body>
      <header>
        <Logo />
      </header>
      <Nav />
      <hr />
      <BrowserRouter>
        <Routes>   
          <Route path='/' index element={<Navigate to="/start" />} />
          <Route path='/start' element={<Start />} />
          <Route path='/models' element={<Models />} />
          <Route path='/insurance' element={<Insurance />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/history' element={<History />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </body>
  );
}

export default App;