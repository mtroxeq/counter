import './App.css';
import {BrowserRouter, Route, Routes,Link} from 'react-router-dom';
import Insurance from './Insurance';
import Contact from './Contact';
import History from './History';
import Models from './Models';

function Nav() {
    return (
        <BrowserRouter>
            <nav>
                <Link to='/models'>Modele</Link>
                <Link to='/insurance'>Ubezpieczenie</Link>
                <Link to='/contact'>Kontakt</Link>
                <Link to='/history'>Historia</Link>

                
              
                <Routes>   
                    <Route path='/models' element={<Models />} />
                    <Route path='/insurance' element={<Insurance />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/history' element={<History />} />
                </Routes>
            </nav>
        </BrowserRouter>
    );
  }
export default Nav;
  