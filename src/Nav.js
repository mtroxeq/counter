import './App.css';
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <nav>
            <Link to='/Models'>Modele</Link>
            <Link to='/'>Ubezpieczenie</Link>
            <Link to='/'>Kontakt</Link>
            <Link to='/'>Historia</Link>
        </nav>
    );
  }
export default Nav;
  