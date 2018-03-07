import React, { Component } from 'react';
import logo from './logo.svg';
import './scss/App.css';

class App extends Component {
  render() {
    return  <main>
        <header>
          <div className="container flexset">
              <a href="./" className="logo">
                <img src={logo} alt="Logo"/>
              </a>
               <nav className="navbar">
                <ul>
                  <li><a href="#about">ABOUT</a></li>
                  <li><a href="#services">SERVICES</a></li>
                  <li><a href="#portfolio">PORTFOLIO</a></li>
                  <li><a href="#contact">CONTACT</a></li>
                </ul>
               </nav>
            </div>
        </header>
    </main>

  }
}

export default App;
