import React from 'react';

import PokemonDetails from './PokemonDetails.js'

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, details: {} };
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.id}`)
      .then(res => res.json())
      .then(details => this.setState(_ => ({ loading: false, details })));
  }

  render() {
    const loading = <p>Loading....</p>;
    const pokemonDetails = <PokemonDetails pokemon={this.state.details} />;
    const pokemon = this.state.loading ? loading : pokemonDetails;
    return <div className='pokemon'>{pokemon}</div>;
  }
}

export default Pokemon;
