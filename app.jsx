import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    render() {
        return <div>
            <header className="main_header"> Strona główna </header>
            <nav>
                <ul>
                    <li>Start</li>
                    <li>O nas</li>
                    <li>Galeria</li>
                    <li>Kontakt</li>
                </ul>
            </nav>
            <section>
                <article>
                    Lorem ipsum
                </article>
                <article>
                    Lorem ipsum 2
                </article>
            </section>

            <footer>
             2018
            </footer>
        </div>
    }
}




document.addEventListener('DOMContentLoaded',
  function(){
    ReactDOM.render(
      <App />,
      document.getElementById('app')
    );
});