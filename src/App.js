import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Masthead from './components/Masthead';

const App = () => (
  <div>
    <Navigation />
    <Masthead />
    {/* Add other components here */}
  </div>
);

export default App;
