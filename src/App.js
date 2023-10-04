import './App.css';
import Logo from './Logo.js';
import Start from './Start.js';
import Footer from './Footer';
import Nav from './Nav';

function App() {
  return (
    <body>
      <header>
        <Logo />
      </header>
      <Nav />
      <hr />
      <Start />
      <Footer />
    </body>
  );
}

export default App;
