import React from 'react';

const PokemonCard = ({ pokemon }) => {
  // const statsList = pokemon.stats.map((stat, index) => (
  //   <tr key={index}>
  //     <th>{stat.name}</th>
  //     <td>{stat.value}</td>
  //   </tr>
  // ));

  const typesList = pokemon.types.map((type, index) => (
    <div className='type' key={index}>
      <div className={type}></div>
      <div>{type}</div>
    </div>
  ));

  return (
    <div className='pokemon'>
      <div className='pokeCard-heading'>
        <h3 className='backName'>{pokemon.name}</h3>
        <h3 className='backName'>#{pokemon.id}</h3>
      </div>
      <img
        src={pokemon.imageUrl}
        className='pokemon-image'
        alt={pokemon.name}
      ></img>
      {/* <table className='table'>
        <tbody>{statsList}</tbody>
      </table> */}
      <div className='types'>{typesList}</div>
    </div>
  );
};

export default PokemonCard;