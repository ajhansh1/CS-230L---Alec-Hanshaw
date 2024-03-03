import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>CS 230L</h1>
      <h2>Section - 02</h2>
      <p>WVU ID: 800373257</p>
      <p>Hi, I am Alec Hanshaw.</p>
      <div className="card-container">
      <div className="row">
          <div className="col">
            <Card color="red" title="1" />
          </div>
          <div className="col">
            <Card color="green" title="2" />
          </div>
          <div className="col">
            <Card color="blue" title="3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;