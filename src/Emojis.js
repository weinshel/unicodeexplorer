import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import emojis from 'emojibase-data/en/data.json';
// import compact from 'emojibase-data/en/compact.json';

function urlName(string) {
  return string.toLowerCase().replace(/[^a-z0-9]+/g,'-');;
}

function cleanName(string) {
  return string.toLowerCase().replace(/[^a-z0-9]+/g,' ');;
}


emojis.forEach(emoji => {
  if (emoji.annotation) {
    emoji.urlName = urlName(emoji.annotation);
    emoji.cleanName = cleanName(emoji.annotation);
  } else {
    emoji.urlName = urlName(emoji.name);
    emoji.cleanName = cleanName(emoji.name);
  }
})

// const details = emojis.map(emoji => {
//   <pre>{JSON.stringify(emoji)}</pre>
// });

const EmojiList = ({ match }) => (
  <div>
    <h1>Emoji</h1>

    <Route path={`${match.url}/:name`}  component={EmojiDetails}/>
    <Route exact path={match.url} render={() => (
      <div>
        {emojis.map(emoji => (
          <div key={emoji.order}>
            <Link to={{
              pathname: match.url + '/' + emoji.urlName,
              state: { details: emoji }
            }}>
              {emoji.emoji}
            </Link>

          </div>
        ))}
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
      <h1>{details.emoji}</h1>
      <p>{details.cleanName}</p>
      <pre>{details.hexcode}</pre>
      <pre>{JSON.stringify(details, null, '\t')}</pre>
    </div>
  );
}


export default EmojiList;