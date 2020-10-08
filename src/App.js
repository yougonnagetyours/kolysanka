import React, { Component } from 'react';
import './App.css';
import Typewriter from 'typewriter-effect';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.changeDelay(100)
              .typeString('W górze tyle gwiazd')
              .pauseFor(500)
              .changeDeleteSpeed(1)
              .deleteAll().changeDeleteSpeed(1)
              .typeString('W dole tyle miast')
              .pauseFor(500)
              .deleteAll()
              .typeString('Gwiazdy miastom dają znać')
              .deleteAll()
              .typeString('Że dzieci muszą spaaać') 
              .pauseFor(1500)
              .deleteAll()
              .typeString('Ach śpiiij')
              .deleteAll()
              .typeString('Kochanie ! ')
              .deleteAll()
              .typeString('Jeśli gwiazdki z nieba chcesz')
              .pauseFor(1)
              .deleteAll()
              .typeString('Dostaniesz <3 <3')
              .start();
          }}
        />
      </div>
    );
  }
}

export default App;
