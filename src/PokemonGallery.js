import React from 'react';

import PokemonCard from './PokemonCard.js'

const PokemonGallery = ({ pokemonsData}) => {
  const pokemons = pokemonsData.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.name} />);
  return <div className="pokemonContainer">{pokemons}</div>
};

export default PokemonGallery;
