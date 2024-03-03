import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <h1>CS 230L</h1>
      <h2>Section - 02</h2>
      <p>WVU ID: 800373257</p>
      <p>Hi, I am Alec Hanshaw.</p>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;