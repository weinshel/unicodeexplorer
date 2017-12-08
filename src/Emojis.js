import React from 'react';
import {
  Route
} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';


import helpers from './helpers.js';

import emojis from 'emojibase-data/en/data.json';
// import compact from 'emojibase-data/en/compact.json';


emojis.forEach(emoji => {
  if (emoji.annotation) {
    emoji.urlName = helpers.urlName(emoji.annotation);
    // emoji.cleanName = helpers.cleanName(emoji.annotation);
    emoji.customName = emoji.annotation;
  } else {
    emoji.urlName = helpers.urlName(emoji.name);
    // emoji.cleanName = helpers.cleanName(emoji.name);
    emoji.customName = helpers.cleanName(emoji.name);
  }
})

// const details = emojis.map(emoji => {
//   <pre>{JSON.stringify(emoji)}</pre>
// });

const EmojiBox = (emoji) => {
  return (
    <LinkContainer
      style={{ textDecoration: 'none' }}
      to={{
        pathname: '/emoji/' + emoji.urlName
      }}
    >
      <div key={emoji.order} className="character-box">
        {emoji.emoji}
      </div>
    </LinkContainer>

  );
}

const EmojiBoxLarge = (emoji) => {
  return (
    <div key={emoji.order} className="character-box-large">
        {emoji.emoji}
    </div>
  );
}

const EmojiList = ({ match }) => (
  <div>
    <h1>Emoji</h1>

    <Route path={`${match.url}/:name`}  component={EmojiDetails}/>
    <Route exact path={match.url} render={() => (
      <div>
        {emojis.map(emoji => EmojiBox(emoji))}
      </div>
    )}/>


  </div>
);

const EmojiDetails = ({ match }) => {
  let details;
  let urlName = match.params.name
  details = emojis.find(emoji => (emoji.urlName === urlName));

  if (!details) {
    return (
    <div>
      <p>Emoji not found.</p>
    </div>
  );
  }

  return (
    <div>
      {EmojiBoxLarge(details)}
      <p>{details.customName}</p>
      <pre>{details.hexcode}</pre>
      <pre>{JSON.stringify(details, null, '\t')}</pre>
    </div>
  );
}


export default EmojiList;