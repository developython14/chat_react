import logo from './logo.svg';
import './App.css';

function App() {
  var user = 'mustapha';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and kho to tomahook.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>salam khoya</p>
        <h1>{user+' 33'}</h1>

      </header>
    </div>
  );
}

export default App;
