import React, { Component } from 'react'
import LogForm from './components/LogForm.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hang Log</h1>
        </header>
        <LogForm />
      </div>
    );
  }
}

export default App
