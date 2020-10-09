import React from 'react';

import PokemonCard from './PokemonCard.js'
import * as data from './pokemonsData.json'

const PokemonGallery = (_) => {
  const pokemondsData = data.default;
  const pokemons = pokemondsData.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.name} />);
  return <div className="pokemonContainer">{pokemons}</div>
};

export default PokemonGallery;
