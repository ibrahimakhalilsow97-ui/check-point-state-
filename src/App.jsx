import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import { Component } from 'react';
import k from './assets/k.jpg';

class App extends Component {
  // instrution pour basculer le profil

  basculerProfil = () => {
  this.setState({
    montre: !this.state.montre
  });
};
  // le stat 
  state = {
  Personne: {
    fullName: "Ibrahima Khalil Sow",
    bio: "Technicien biologiste.",
    imgSrc: k,
    profession: "Technicien biologiste"
  },
  montre: false,
tempsEcoule: 0 
};

componentDidMount() {
  this.interval = setInterval(() => {
    this.setState({
      tempsEcoule: this.state.tempsEcoule + 1
    });
  }, 1000);
}

componentWillUnmount() {
  clearInterval(this.interval);
}

// runder ce que l'on veut afficher sur la page web
  render() {
    return (
    <div>
      <h1>Mon profil</h1>

      <button onClick={this.basculerProfil}>
        {this.state.montre ? "Masquer le profil" : "Afficher le profil"}
      </button>

      {this.state.montre && (
        <div>
          <h2>{this.state.Personne.fullName}</h2>
          <p>{this.state.Personne.bio}</p>
          <img
            src={this.state.Personne.imgSrc}
            alt={this.state.Personne.fullName}
            width="200"
          />
          <p>{this.state.Personne.profession}</p>
        </div>
      )}
    </div>
  );
}
}


export default App;
