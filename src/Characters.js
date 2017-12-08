import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';

import helpers from './helpers.js';

import {getBlocks, getCharacters} from 'unidata';


const CharacterBox = (codepoint) => {
  // const name = unicharadata.lookupname(symbol);
  // const cleanName = helpers.cleanName(name);
  // const urlName = helpers.urlName(name);
//   const urlName = symbol;
  return (

    <div key={codepoint} className="character-box">
      <Link 
        style={{ textDecoration: 'none' }}
        to={{
          pathname: '/characters/' + codepoint
        }}
      >
        {String.fromCodePoint(codepoint)}
      </Link>

    </div>
  );
}

const CharacterPage = ({ match }) => {
  const codepoint = match.params.name;
  console.log(codepoint);
  const details = getCharacters().find(x=>x.code == codepoint);

  return (
    <div>
      <h1>Characters</h1>
      {CharacterBox(codepoint)}
      <p>{details.name}</p>
      <pre>{JSON.stringify(details, null, '\t')}</pre>
    </div>
  )
}


export {CharacterBox, CharacterPage};