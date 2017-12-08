import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';

// import helpers from './helpers.js';

import {getCharacters} from 'unidata10';


const CharacterBox = (codepoint) => {
  // const name = unicharadata.lookupname(symbol);
  // const cleanName = helpers.cleanName(name);
  // const urlName = helpers.urlName(name);
//   const urlName = symbol;
  return (
    <LinkContainer 
        style={{ textDecoration: 'none' }}
        to={{
          pathname: '/characters/' + codepoint
        }}
      >
      <div key={codepoint} className="character-box">
      
        {String.fromCodePoint(codepoint)}

      </div>      
    </LinkContainer>

  );
}

const CharacterBoxLarge = (codepoint) => {
  // const name = unicharadata.lookupname(symbol);
  // const cleanName = helpers.cleanName(name);
  // const urlName = helpers.urlName(name);
//   const urlName = symbol;
  return (
    <div key={codepoint} className="character-box-large">
      {String.fromCodePoint(codepoint)}
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
      {CharacterBoxLarge(codepoint)}
      <p>{details.name}</p>
      <pre>{JSON.stringify(details, null, '\t')}</pre>
    </div>
  )
}


export {CharacterBox, CharacterBoxLarge, CharacterPage};