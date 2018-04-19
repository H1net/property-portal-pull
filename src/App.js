import React, { Component } from 'react';

import PortalPropertyList from './components/PortalPropertyList';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Property Portal Data Viewer</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <PortalPropertyList />
      </div>
    );
  }
}

export default App;
