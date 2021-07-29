/*
### folders that I want to get 

1. emojis-obj: which contains all of the emojis in the form (emojiName: {u: string, v?: [string, string, string, string, string]})
2. emojis-by-categories: which contains an object of pointers to emojiNames by category in the from (category: emojiName[])
3. all-emojis: which contains an array of all the emojis emojiName[].
*/

const typescriptify = (data, type) => {
  return `
  import { ${type.name} } from '${type.path}';
  // eslint-disable-next-line import/no-anonymous-default-export\n
  export default ${data} as ${type.name};
  `;
};

const fs = require('fs');
const path = require('path');

const dataTypesPath = '../types/data';

const categories = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, './input/categories-data.json'),
    'utf-8',
  ),
);

const emojis = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, './input/emojis-data.json'), 'utf-8'),
);

// 1.
const emojisObj = {};
const getEmojiUnicode = s => {
  return String.fromCodePoint(...s.split('-').map(c => Number(`0x${c}`)));
};

categories.forEach(category => {
  emojis[category].forEach(emoji => {
    emojisObj[emoji.n[emoji.n.length - 1]] = {
      u: getEmojiUnicode(emoji.u),
    };
  });
});

fs.writeFileSync(
  path.resolve(__dirname, '../data/emojis-obj.ts'),
  typescriptify(JSON.stringify(emojisObj), {
    name: 'EmojisObjType',
    path: dataTypesPath,
  }),
);

// 2.
const emojisByCategory = {};

categories.forEach(category => {
  emojisByCategory[category] = emojis[category].map(
    emoji => emoji.n[emoji.n.length - 1],
  );
});

fs.writeFileSync(
  path.resolve(__dirname, '../data/emojis-by-category.ts'),
  typescriptify(JSON.stringify(emojisByCategory), {
    name: 'EmojisByCategoryType',
    path: dataTypesPath,
  }),
);

// 3.
const allEmojis = Object.keys(emojisObj);

fs.writeFileSync(
  path.resolve(__dirname, '../data/all-emojis.ts'),
  typescriptify(JSON.stringify(allEmojis), {
    name: 'AllEmojisType',
    path: dataTypesPath,
  }),
);

// categories
fs.writeFileSync(
  path.resolve(__dirname, '../data/categories.ts'),
  typescriptify(JSON.stringify(categories), {
    name: 'CategoriesType',
    path: dataTypesPath,
  }),
);
