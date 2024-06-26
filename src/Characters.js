import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';

// import helpers from './helpers.js';

import {getCharacters} from 'unidata';


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
      <h2>{details.name}</h2>
      {CharacterBoxLarge(codepoint)}
      <ul>
        <li><strong>Name:</strong> {details.name}</li>
        {/* <li><strong>Hex:</strong> {details.code}</li> */}
        <li><strong>Decimal:</strong> {details.code}</li>
        <li><strong>Category:</strong> {details.cat}</li>
        {details.bidi && <li><strong>Bidirectional category:</strong> {details.bidi}</li>}
        {details.decompType && <li><strong>Decomposition type:</strong> {details.decompType}</li>}
        {details.decomp && <li><strong>Decomposition mapping:</strong> {details.decomp}</li>}
        {details.oldName && <li><strong>Old name:</strong> {details.oldName}</li>}
        {details.upper && <li><strong>Uppercase:</strong> {details.upper}</li>}
        {details.lower && <li><strong>Lowercase:</strong> {details.lower}</li>}
        {details.title && <li><strong>Title case:</strong> {details.title}</li>}

      </ul>
      {/* <br/> */}
      {/* <pre>{JSON.stringify(details, null, '\t')}</pre> */}
    </div>
  );
}


export {CharacterBox, CharacterBoxLarge, CharacterPage};