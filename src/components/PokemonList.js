import React, {Fragment} from 'react';
import Pokemon from './pokemon.js'

const PokemonList = (props) => {

  const commentNodes = props.pokemon.map((pokemon, index) => {
    return <Pokemon pokemon={pokemon} key={index} />
  });

  return (
    <Fragment>
        {commentNodes}
    </Fragment>
  )
}

export default PokemonList
