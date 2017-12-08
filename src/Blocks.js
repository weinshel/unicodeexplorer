import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';

// import unicode from 'unicode-10.0.0';
import {getBlocks, getCharacters} from 'unidata10';

import helpers from './helpers';
import {CharacterBox} from './Characters';

const blocks = getBlocks();

// const unicharadata = require("unicharad/ata");
// import unicharadata from 'unicharadata';

const BlocksList = ({ match }) => {
  // console.log(unicode);

  // let type = "Script"
  // if (match.path.includes('scripts')) {
  //   type = 'Script';
  // } else if (match.path.includes('blocks')) {
  //   type = 'Block';
  // }

  return (
    <div>
      <h1>Character Blocks</h1>

      <Route path={`${match.url}/:name`}  component={BlockGrid}/>

      <Route exact path={match.url} render={() => (
        <div>
          {blocks.map(block => {
            const uname = helpers.urlName(block.blockName)
            return(
              <div key={block.blockName}>
                <Link to={{
                  pathname: match.url + '/' + uname
                }}>
                  {block.blockName}
                </Link>

              </div>
            )
          })}
        </div>
      )}/>

    </div>
  );
}

const BlockGrid = ({ match }) => {

  const urlName = match.params.name;
  const block = blocks.find(x => (helpers.urlName(x.blockName) === urlName));
  const start = block.startCode;
  const end = block.endCode;

  return(
    <div>
      <h2>{block.blockName}</h2>
      {CharactersGrid(start, end)}
    </div>
  );
}

const CharactersGrid = (start, end) => {

  // const codePoints = require('unicode-10.0.0/Script/' + scriptName + '/code-points');
  // const symbols = require('unicode-10.0.0/' + type + '/' + scriptName + '/symbols');

  const characters = getCharacters().filter(x => (x.code >= start && x.code <= end));

  return(
    <div>
      {characters.map(char => (CharacterBox(char.code)))}
    </div>
  );

}

export default BlocksList;