import React from 'react';
import './styles/index.css';
import Weather from './components/WeatherCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>
    </div>
  );
}

export default App;
