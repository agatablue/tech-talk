import React, { Component } from 'react';
import logo from './logo.svg';
import fbicon from './images/fb.svg';
import yticon from './images/yt.svg'
import './scss/App.css';

class App extends Component {
  render() {
    return  <div>
        <header>
          <div className="container flex-space-between">
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

        <section className="container flex-space-around main-content">
            <article>
              <h2>About me</h2>
              <h5><strong>MY STORY</strong></h5> 
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </article>
            <div className="img-right" ></div>
        </section>

        <footer>
          <div className="container  flex-space-between">
            <p>You may also contact me through the social networks like</p>
            <ul>
                <li>
                  <a href="https://www.facebook.com/">
                    <img src={fbicon} alt="Ikona FB" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/">
                    <img src={yticon} alt="Ikona Youtube" />
                  </a>
                </li>
            </ul>
          </div>
        </footer>        
    </div>

  }
}

export default App;
