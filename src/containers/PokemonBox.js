import React, {Component} from 'react';
import PokemonList from '../components/PokemonList.js';
import PokemonBox from '../components/PokemonBox.js'

class PokemonBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      comments: [
        {
          id: 1,
          name: "Ninetails",
          url: "https://pokeapi.co/api/v2/pokemon-form/38/"
        },
        {
          id: 2,
          name: "Mewtwo",
          url: "https://pokeapi.co/api/v2/pokemon/150/"
        }
      ]
    }
    this.handlePokemonSubmit = this.handlePokemonSubmit.bind(this);
  }

  handlePokemonSubmit(newPokemon) {
    newPokemon.id = Date.now()
    const updatedPokemon = [...this.state.pokemon]
    this.setState({
      Pokemon: updatedPokemon
    })
  }


  render(){
    return (
      <div>
        <h2>Add a Pokemon </h2>
        <PokemonForm onCommentSubmit={this.handlePokemonSubmit} />
        <h2>Pokemon</h2>
        <PokemonList pokemon={this.state.pokemon} />
      </div>
    )
  }
}

export default PokemonBox;
