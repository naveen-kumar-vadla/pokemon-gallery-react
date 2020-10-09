import React from 'react';

import FilteredPokemonGallery from './FilteredPokemonGallery.js';
import * as data from './pokemonsData.json';

const App = () => (
  <div>
    <h1 className='main-heading'>Pokemon Gallery</h1>
    <FilteredPokemonGallery pokemonsData={data.default} />
  </div>
);

export default App;
