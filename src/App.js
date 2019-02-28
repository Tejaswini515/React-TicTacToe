import React, { Component } from 'react';
import './App.css';
import Board from './Board';
import Square from './Square';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            
          </p>
        </header>
        <div style={{display:"flex",marginTop:"50px",justifyContent:'center'}}>
          <Board/>
        </div>
        <div style={{display:"flex",justifyContent:"center",margin:"100px"}}>
          <Square value={"Player X"}/>
          <Square value={"Player O"}/>
        </div>
      </div>
    );
  }
}

export default App;
