import React from 'react';

import PokemonGallery from './PokemonGallery.js';

const App = () => (
  <div>
    <h1 className='main-heading'>Pokemon Gallery</h1>
    <div className='mainContainer'>
      <div className='searchBarContainer'></div>
      <div>
        <PokemonGallery />
      </div>
    </div>
  </div>
);

export default App;
