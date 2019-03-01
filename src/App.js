import React, { Component } from 'react';
import './App.css';
import Board from './Board';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Tic Tac Toe
          </p>
        </header>
        <div style={{display:"flex",marginTop:"50px",justifyContent:'center'}}>
          <Board/>
        </div>
      </div>
    );
  }
}

export default App;
