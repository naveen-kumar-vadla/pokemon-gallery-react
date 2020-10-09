import React from 'react';

import PokemonGallery from './PokemonGallery.js';
import * as data from './pokemonsData.json'

const App = () => (
  <div>
    <h1 className='main-heading'>Pokemon Gallery</h1>
    <div className='mainContainer'>
      <PokemonGallery pokemonsData={data.default}/>
    </div>
  </div>
);

export default App;
