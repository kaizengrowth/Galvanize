import logo from './logo.svg';
import './App.css';
import NewsItem from './components/NewsItem.js';
import NavBar from './components/NavBar.js'

function App(props) {
  // console.log('passed in from Index.js: ');
  // console.log(props);
  // console.log(props.numbers);
  // console.log(props.colors);

  const {numbers, colors} = props;
  console.log('numbers: ' + numbers);
  console.log('colors: ' + colors);

  const data = [
    {name: 'Mark Zuckerberg',
    action: 'buys Oculus and Oculus Rift',},
    {name: 'Microsoft',
    action: 'downloads Windows 10'},
    {name: 'Android',
    action: 'releases Android 11, giving us Android 12'},
  ];

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World!</h1>
        <NewsItem name={"Mark Zuckerberg"} action={"made a metaverse."}></NewsItem>
        <NewsItem name={"Jack Dorsey"} action={"made a tweet."}></NewsItem>
        <NewsItem name={"Elon Musk"} action={"made a fool."}></NewsItem>

        { data.map(item => 
            <NewsItem name={item.name} action={item.action}/>)
        }
    
        <ul>
          {colors.map(c => <li key={c} >{c}</li>)}
        </ul>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
              Learn React
            </a>
      </header>
    </div>
  );
}

export default App;
