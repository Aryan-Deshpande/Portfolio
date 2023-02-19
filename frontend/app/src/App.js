import { logo } from './logo.svg';
import './App.css';
import './styling.css'

import React from 'react';
import NavbarComp from './NavbarComp.js';

function App() {

  const styling = {
    textAlign: 'center',
  }

  const imgstyle = {
    maxWidth: '300px',
    borderRadius: '40%',
  }

  return (
    <div className="App">
      
      <NavbarComp />
      <br></br>

      <div class="intro" style={{styling}}>
        <img style={imgstyle} src={require('./aryan6.jpg')} alt="Aryan Deshpande"/>
        
        <div>
          <a>
            
          </a>
        </div>

        <p>Hey there this is my bio, Hey there this is my bio, Hey there this is my bio, Hey there this is my bio, ,Hey there this is my bioHey there this is my bioHey there this is my bioHey there this is my bioHey there this is my bioHey there this is my bioHey there this is my bioHey there this is my bioHey there this is my bioHey there this is my bioHey there this is my bioHey there this is my bioHey there this is my bioHey there this is my bioHey there this is my bioHey there this is my bioHey there this is my bioHey there this is my bio</p>
      </div>
  

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
