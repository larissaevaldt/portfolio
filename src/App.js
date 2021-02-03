import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Intro from './components/Intro';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Navbar />
            <Intro />
        </div>
    );
  }
}

export default App;
