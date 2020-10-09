import React from 'react';

import Pokemon from './Pokemon.js';

const PokemonGallery = ({ count }) => {
  const pokemonIds = new Array(+count).fill().map((x, i) => i + 1);
  const pokemons = pokemonIds.map(id => <Pokemon id={id} key={id} />);
  return <div className="pokemonContainer">{pokemons}</div>
};

export default PokemonGallery;
