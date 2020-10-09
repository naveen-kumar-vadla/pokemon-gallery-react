import React from 'react';

import PokemonGallery from './PokemonGallery.js';

const SearchBar = ({ onInput }) => {
  const input = (
    <input
      className='searchBar'
      type='search'
      name='searchBar'
      id='searchBar'
      placeholder='Search your pokemon here by name or id'
      onInput={event => onInput(event.target.value)}
    ></input>
  );
  return <div className='searchBarContainer'>{input}</div>;
};

class FilteredPokemonGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
    this.onInput = this.onInput.bind(this);
    this.filterPokemons = this.filterPokemons.bind(this);
  }

  onInput(inputValue) {
    this.setState(_ => ({ inputValue }));
  }

  filterPokemons() {
    return this.props.pokemonsData.filter(pokemon => {
      return (
        pokemon.name.toLowerCase().includes(this.state.inputValue.toLowerCase()) ||
        pokemon.id.toString()===this.state.inputValue
      );
    });
  }

  render() {
    return (
      <div className='mainContainer'>
        <SearchBar onInput={this.onInput} />
        <PokemonGallery pokemonsData={this.filterPokemons()} />
      </div>
    );
  }
}

export default FilteredPokemonGallery;
