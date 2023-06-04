
import './App.css';

//componente

import NavBar from "./components/NavBar.js/NavBar"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <NavBar/>
      </header>

    </div>
  );
}

export default App;
