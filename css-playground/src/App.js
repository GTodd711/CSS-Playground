import galaxy from './galaxy.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="orbit-container"></div>
            <img src={galaxy} className="App-logo" alt="Galaxy Background" />
            <div className="overlay">
            <h1>Gavin Todd</h1>
        <div className="orbit">
          <div className="planet0" id="mercury"></div>
          <div className="planet1" id="venus"></div>
          <div className="planet2" id="earth"></div>
          <div className="planet3" id="mars"></div>
          <div className="planet4" id="jupiter"></div>
          <div className="planet5" id="saturn"></div>
          <div className="planet6" id="uranus"></div>
          <div className="planet7" id="neptune"></div>
        </div>
        <article
          className="App-link"
          href="https://github.com/GTodd711"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github
        </article> 
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
