import logo from './old_fb_banner.png';
import './App.css';
import NewsFeed from './containers/NewsFeed';

function App(props) {
  const {numbers, colors} = props;
  console.log(colors);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <h1>Hello the Book of Face 😳</h1>
        <NewsFeed/>
      </header>
    </div>
  );
}

export default App;
