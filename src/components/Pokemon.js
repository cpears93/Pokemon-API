import React from 'react';

const Pokemon = (props) => {
  return (
    <p>Name: {props.pokemon.name} - {props.pokemon.text}</p>
  )
}

export default Pokemon;
