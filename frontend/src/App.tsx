import React, { useState, useEffect } from 'react';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function App() {
  const [message, setMessage] = useState('');
  const [health, setHealth] = useState('');

  useEffect(() => {
    // Fetch main API message
    fetch(`${API_URL}/`)
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => setMessage('Error connecting to backend'));

    // Fetch health status
    fetch(`${API_URL}/health`)
      .then(response => response.json())
      .then(data => setHealth(data.status))
      .catch(error => setHealth('Unhealthy'));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>MERN Stack Application</h1>
        <p>Frontend: React with TypeScript</p>
        <p>Backend Status: {health}</p>
        <p>Backend Message: {message}</p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
