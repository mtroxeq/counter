import './App.css';
import React from "react";
import {BrowserRouter, Link } from 'react-router-dom';
function Nav() {
    
    return (
        <BrowserRouter>
            <nav>
                <Link to='/start'>Start</Link>
                <Link to='/models'>Modele</Link>
                <Link to='/insurance'>Ubezpieczenie</Link>
                <Link to='/contact'>Kontakt</Link>
                <Link to='/history'>Historia</Link>
            </nav>
        </BrowserRouter>
    );
  }
export default Nav;
  