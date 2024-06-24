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
          <div className="planet" id="mercury"></div>
          <div className="planet" id="venus"></div>
          <div className="planet" id="earth"></div>
          <div className="planet" id="mars"></div>
          <div className="planet" id="jupiter"></div>
          <div className="planet" id="saturn"></div>
          <div className="planet" id="uranus"></div>
          <div className="planet" id="neptune"></div>
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
