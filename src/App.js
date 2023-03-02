//import logo from './logo.svg';
import './App.css';
import BellaDiallo from './BellaDiallo.jpeg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={BellaDiallo} className="Bella Diallo" alt="logo" />
        <p>
        My name is Mamadou Bella Diallo and I'm going to master React!
        </p>
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
