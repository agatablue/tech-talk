import React, { Component } from 'react';
import logo from './images/logo.svg';
import fbicon from './images/fb.svg';
import yticon from './images/yt.svg'
import './scss/App.css';

class Header extends Component {
  render() {
    const items = ["ABOUT", "SERVICES", "PORTFOLIO"]
    const elementsLi = items.map( function(elem) {
      return <li key={elem}> <a href="#"> {elem} </a> </li>
    })

      return <header>
        <div className="container flex-space-between">
            <a href="./" className="logo">
              <img src={logo} alt="Logo"/>
            </a>
            <nav className="navbar">
              <ul>
                {elementsLi}
              </ul>
            </nav>
          </div>
    </header>
  }
}

class Section extends Component {
  render() {
    return  <section className="container flex-space-around main-content">
      <article>
        <h2>About me</h2>
        <h5><strong>MY STORY</strong></h5> 
        <p>My name is {this.props.author} and I am Front-end developer. I have {this.props.experience} years of experience.</p>
      </article>
      <div className="img-right" ></div>
  </section>
  }
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    this.idInterval = setInterval( () => {
      this.setState({
        counter: this.state.counter + 1
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.idInterval);
  }
 
  render() {
    return  <div>
      <p>Licznik: {this.state.counter}</p>
    </div>
  }
}

class Footer extends Component {

  render() {
    return  <footer>
    <div className="container  flex-space-between">
      <Counter />
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
  }
}

class App extends Component {
  render() {
    return  <div>
       <Header />
       <Section author="Agata Malec-Sromek" experience={5}/>
       <Footer/>
    </div>

  }
}

export default App;
