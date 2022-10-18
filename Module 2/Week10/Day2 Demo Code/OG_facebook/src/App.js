import logo from './old_fb_banner.png';
import './App.css';
import NewsFeed from './containers/NewsFeed';

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <h1>Book of Face 😳</h1>
        <NewsFeed/>
      </header>
    </div>
  );
}

export default App;
