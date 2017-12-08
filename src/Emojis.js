import React from 'react';
import { Route, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import concatMap from 'concat-map';

import helpers from './helpers.js';

import emojis from 'emojibase-data/en/data.json';
import { generateEmoticonPermutations } from 'emojibase';
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

  let hexchars = details.hexcode.split("-");
  let decimalchars = hexchars.map(x => Number.parseInt(x, 16));
  let decimallinks = decimalchars.map(x => (
    <Link to={{pathname: '/characters/' + x}}>{x} </Link>
  ));

  return (
    <div>
      <h2>{details.customName}</h2>
      {EmojiBoxLarge(details)}
      <ul>
        <li><strong>Name:</strong> {details.name}</li>
        {details.annotation && <li><strong>Annotation:</strong> {details.annotation}</li>}
        {details.shortcodes && <li><strong>Shortcodes:</strong> {details.shortcodes.join(", ")}</li>}
        {details.tags && <li><strong>Tags:</strong> {details.tags.join(", ")}</li>}
        {details.emoticon && <li><strong>Emoticon:</strong> {details.emoticon}
          <ul>
            <li><em>Alternatively</em>,: {generateEmoticonPermutations(details.emoticon).join(", ")}</li>
          </ul>
        </li>}
        <li><strong>Hex: {details.hexcode}</strong></li>
        <li><strong>Decimal: {decimallinks}</strong></li>
        {details.skins && <li><strong>Skin variations:</strong> <pre>{JSON.stringify(details.skins, null, '\t')}</pre></li>}
      </ul>
      {/* <br/> */}
      {/* <pre>{JSON.stringify(details, null, '\t')}</pre> */}
    </div>
  );
}


export default EmojiList;