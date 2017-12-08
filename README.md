# Unicode Explorer

<p>Explore the Unicode character set!</p><p>See all the the characters in a specific block, such as <a href="https://weinshel.github.io/unicodeexplorer/#/#/blocks/cuneiform">Cuneiform</a> or <a href="https://weinshel.github.io/unicodeexplorer/#/#/blocks/cherokee">Cherokee</a>. Learn about a specific character such as <a href="https://weinshel.github.io/unicodeexplorer/#/#/characters/77952">𓂀</a>. See <a href="https://weinshel.github.io/unicodeexplorer/#/#/emoji">all the emoji</a>, or view details about <a href="https://weinshel.github.io/unicodeexplorer/#/#/emoji/smiling-face-with-horns">😈</a>.</p>

# Background

This web app was built as a final project for the Code Making, Code Breaking course at UChicago (LING 26040 Autumn 2017). It allows for exploration of Unicode characters and emojis, and for emoji in specific provides detail about multi-codepoint sequences and character variations.

There are a handful of tools out there that allow you to explore Unicode, such as the [official Unicode code tables](https://www.unicode.org/charts/), [decodeunicode](http://www.decodeunicode.org), [Unicode Lookup](https://unicodelookup.com/), and [Emojipedia](https://emojipedia.org/), but they either are slow to use, difficult to browse, or don’t provide info about multi-codepoint characters. Many emoji are constructed as a sequence of codepoints and not just one character, such as [👩‍👩‍👦 family: woman, woman, boy](https://weinshel.github.io/unicodeexplorer/#/emoji/family-woman-woman-boy), which is actually composed of five characters `1F469-200D-1F469-200D-1F466` (woman, zero-width joiner, woman, zero-width joiner, boy), but is displayed to the user as one character.

# Technical Implementation

## Web App

The web app is built in JavaScript using the React framework and is rendered completely client-side. It uses two external libraries to source information about Unicode characters and emoji, and from that generates clickable tables with groups of characters and detail pages for characters and emoji. The character pages show basic information about each character, and the emoji pages provide more rich information (due to a more detailed data source).

**Example pages:**

- Character block table: [Egyptian Hieroglyphs](https://weinshel.github.io/unicodeexplorer/#/#/blocks/egyptian-hieroglyphs)
- Character detail page: [ା ORIYA VOWEL SIGN AA](https://weinshel.github.io/unicodeexplorer/#/characters/2878)
- Emoji detail page: [👩‍🎤 woman singer](https://weinshel.github.io/unicodeexplorer/#/emoji/woman-singer)

## Data Sources

The character tables and the emoji tables are sourced from third-party libraries that provide processed versions of the character data published by the Unicode Consortium.

The emojis are sourced from the [Emojibase](https://github.com/milesj/emojibase) JavaScript library, which provides every imaginable detail about every emoji, including skin tone variations, alternative names, tags, and emoticon equivalents. The library provides [data structures](https://github.com/milesj/emojibase#data-structure) with the emoji information, and I wrote the frontend to display the grid and then to display the character detail page.

It was slightly more difficult to find a good source for the rest of the Unicode characters; while the Unicode Consortium provides a [text file](https://www.unicode.org/Public/UCD/latest/ucd/UnicodeData.txt) with the name and code points of every character, that data doesn't provide exhaustive information about every character and isn't in a format that is easily incorporated into the rest of the code. I eventually settled on a library called [unidata](https://github.com/chbrown/unidata) to get the character data, which it provides with data structures that make it easy to navigate by block. I had to [update the library for Unicode 10](https://github.com/weinshel/unidata/commit/c4fe4ca828d0f8c26693eb4b97e038a7810c8ba5), but once that was done I was able to write my web app to automatically generate the list of character blocks, grids of characters, and info pages for each character.

I looked into a number of other JavaScript libraries including [node-unicode-data](https://github.com/mathiasbynens/node-unicode-data), [unichardata](https://github.com/bellbind/unicharadata), and [unicode-data](https://github.com/mathiasbynens/unicode-data) (which I even went though the work of updating for Unicode 10), which had some combination of more detail for each character or other advantages, but the data structures they provided didn't end up being easy to fit into my code.

Long-term, I would like to improve this project by finding additional data sources with more detail for individual characters, and polishing up the presentation and interface, both for the navigational pages and the character details (especially with emoji skins). Additionally, I would like to provide the character escapes for multiple programming languages (HTML, JavaScript, Python, etc. all have different ways you include non-ASCII characters in code), which would make this a useful developer tool.