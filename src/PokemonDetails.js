import React from 'react';

const PokemonDetails = ({ pokemon }) => {
  const imageUrl =
    pokemon.sprites.other['dream_world'].front_default ||
    pokemon.sprites.other['official-artwork'].front_default ||
    pokemon.sprites.front_default;

  const stats = pokemon.stats;
  stats.unshift({ stat: { name: 'weight' }, base_stat: pokemon.weight });
  stats.unshift({ stat: { name: 'height' }, base_stat: pokemon.height });
  
  const statsList = stats.map((stat, index) => (
    <tr key={index}>
      <th>{stat.stat.name}</th>
      <td>{stat.base_stat}</td>
    </tr>
  ));

  const typesList = pokemon.types.map(({ type }, index) => (
    <div className='type' key={index}>
      <div className={type.name}></div>
      <div>{type.name}</div>
    </div>
  ));

  return (
    <div>
      <div className='pokeCard-heading'>
        <h3 className='backName'>{pokemon.name}</h3>
        <h3 className='backName'>#{pokemon.id}</h3>
      </div>
      <img src={imageUrl} className='pokemon-image' alt={pokemon.name}></img>
      <table className='table' align='center'>
        <tbody>{statsList}</tbody>
      </table>
      <div className='types'>{typesList}</div>
    </div>
  );
};

export default PokemonDetails;
