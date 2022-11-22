import logo from './old_fb_banner.png';
import './App.css';
import Nav from './Nav.js';
import Main from './Main.js';

function App() {
  return (
    <>
        <img src={logo} className="App-logo" alt="logo" />

        <Nav />
        <Main />
      
    </>
  );
}

export default App;
