import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';

import helpers from './helpers.js';


const CharacterBox = (symbol) => {
  // const name = unicharadata.lookupname(symbol);
  // const cleanName = helpers.cleanName(name);
  // const urlName = helpers.urlName(name);
  const urlName = symbol;
  return (

    <div key={urlName} className="character-box">
      <Link 
        style={{ textDecoration: 'none' }}
        to={{
          pathname: '/characters/' + urlName
        }}
      >
        {symbol}
      </Link>

    </div>
  );
}

const CharacterDetails = () => {};

export {CharacterBox, CharacterDetails};