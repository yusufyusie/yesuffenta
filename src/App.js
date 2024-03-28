import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="contents">
        <h1>Home</h1>
        <p>Welcome to my portfolio site</p>
      </div>
    </div>
  );
}

export default App;
