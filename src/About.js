import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';

import helpers from './helpers';

const AboutPage = () => (
  <div>
    <h1>About</h1>
    <p>
    Explore the Unicode character set!
    </p>
    <p>
    See all the the characters in a specific block, such as <a href="#/blocks/cuneiform">Cuneiform</a> or <a href="#/blocks/cherokee">Cherokee</a>. Learn about a specific character such as <a href="#/characters/77952">𓂀</a>. See <a href="#/emoji">all the emoji</a>, or view details about <a href="#/emoji/smiling-face-with-horns">😈</a>.
    </p>
    <h1 id="background">Background</h1>
    <p>This web app was built by <a href="https://ben.weinshel.net/" target="_blank">Ben Weinshel</a> as a final project for the Code Making, Code Breaking course at UChicago (LING 26040 Autumn 2017). It allows for exploration of Unicode characters and emojis, and for emoji in specific provides detail about multi-codepoint sequences and character variations.</p>
    <p>There are a handful of tools out there that allow you to explore Unicode, such as the <a href="https://www.unicode.org/charts/">official Unicode code tables</a>, <a href="http://www.decodeunicode.org">decodeunicode</a>, <a href="https://unicodelookup.com/">Unicode Lookup</a>, and <a href="https://emojipedia.org/">Emojipedia</a>, but they either are slow to use, difficult to browse, or don’t provide info about multi-codepoint characters. Many emoji are constructed as a sequence of codepoints and not just one character, such as <a href="#/emoji/family-woman-woman-boy">👩‍👩‍👦 family: woman, woman, boy</a>, which is actually composed of five characters <code>1F469-200D-1F469-200D-1F466</code> (woman, zero-width joiner, woman, zero-width joiner, boy), but is displayed to the user as one character.</p>
    <h1 id="technical-implementation">Technical Implementation</h1>
    <h2 id="web-app">Web App</h2>
    <p>The web app is built in JavaScript using the React framework and is rendered completely client-side. It uses two external libraries to source information about Unicode characters and emoji, and from that generates clickable tables with groups of characters and detail pages for characters and emoji. The character pages show basic information about each character, and the emoji pages provide more rich information (due to a more detailed data source).</p>
    <p><strong>Example pages:</strong></p>
    <ul>
    <li>Character block table: <a href="#/blocks/egyptian-hieroglyphs">Egyptian Hieroglyphs</a></li>
    <li>Character detail page: <a href="#/characters/2878">ା ORIYA VOWEL SIGN AA</a></li>
    <li>Emoji detail page: <a href="#/emoji/woman-singer">👩‍🎤 woman singer</a></li>
    </ul>
    <h2 id="data-sources">Data Sources</h2>
    <p>The character tables and the emoji tables are sourced from third-party libraries that provide processed versions of the character data published by the Unicode Consortium.</p>
    <p>The emojis are sourced from the <a href="https://github.com/milesj/emojibase">Emojibase</a> JavaScript library, which provides every imaginable detail about every emoji, including skin tone variations, alternative names, tags, and emoticon equivalents. The library provides <a href="https://github.com/milesj/emojibase#data-structure">data structures</a> with the emoji information, and I wrote the frontend to display the grid and then to display the character detail page.</p>
    <p>It was slightly more difficult to find a good source for the rest of the Unicode characters; while the Unicode Consortium provides a <a href="https://www.unicode.org/Public/UCD/latest/ucd/UnicodeData.txt">text file</a> with the name and code points of every character, that data doesn’t provide exhaustive information about every character and isn’t in a format that is easily incorporated into the rest of the code. I eventually settled on a library called <a href="https://github.com/chbrown/unidata">unidata</a> to get the character data, which it provides with data structures that make it easy to navigate by block. I had to <a href="https://github.com/weinshel/unidata/commit/c4fe4ca828d0f8c26693eb4b97e038a7810c8ba5">update the library for Unicode 10</a>, which involved downloading the newest official Unicode data file, and then figuring out how to run the library’s build scripts, but once that was done I was able to write my web app to automatically generate the list of character blocks, grids of characters, and info pages for each character.</p>
    <p>I looked into a number of other JavaScript libraries including <a href="https://github.com/mathiasbynens/node-unicode-data">node-unicode-data</a>, <a href="https://github.com/bellbind/unicharadata">unichardata</a>, and <a href="https://github.com/mathiasbynens/unicode-data">unicode-data</a> (which I even went though the work of updating for Unicode 10), which had some combination of more detail for each character or other advantages, but the data structures they provided didn’t end up being easy to fit into my code.</p>
    <p>Long-term, I would like to improve this project by finding additional data sources with more detail for individual characters, and polishing up the presentation and interface, both for the navigational pages and the character details (especially with emoji skins). Additionally, I would like to provide the character escapes for multiple programming languages (HTML, JavaScript, Python, etc. all have different ways you include non-ASCII characters in code), which would make this a useful developer tool.</p>
  </div>
);

export default AboutPage;