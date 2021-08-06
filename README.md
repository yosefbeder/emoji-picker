# Emoji-Picker

A simple and useful emoji-picker without much configurations 😎.

You can try to play with the configurations from this [Demo Project](https://yosefbeder.github.io/emoji-picker/).

## Installation

You can install it with either

```bash
npm install @yosefbeder/emoji-picker
```

or

```bash
yarn add @yosefbeder/emoji-picker
```

## Usage

To start using the component you shouldn't add any configs except `onEmojiClick`.

Most of the configs focuses on customizing the way it looks (You can play with then from [here](https://yosefbeder.github.io/emoji-picker/)).

```javascript
import React from 'react';
import EmojiPicker from '@yosef_beder/emoji-picker';

const App = () => {
  const [emoji, setEmoji] = useState('');

  return (
    <div>
      <EmojiPicker onEmojiClick={emojiObj => setEmoji(emojiObj.emoji)} />
    </div>
  );
};
```

## Configurations

| Name              | Type                                                                                                                                                  | Default Value | Required? | Description                                                                                                                   |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `theme`           | `'light' \| 'dark'`                                                                                                                                   | `'light'`     | No        | Changes the theme from light to dark to suit all kind of apps.                                                                |
| `size`            | `'sm' \| 'med' \| 'lg'`                                                                                                                               | `'med'`       | No        | Changes the size of the container, category, and emoji.                                                                       |
| `style`           | `CSSProperties`                                                                                                                                       | `undefined`   | No        | Overrides the styles of the container and it's useful for positioning.                                                        |
| `autoFocus`       | `boolean`                                                                                                                                             | `true`        | No        | Focuses the searching bar when the component is mounted.                                                                      |
| `defaultSkinTone` | `0 >= number > 6`                                                                                                                                     | 0             | No        | Defines the selected skin tone when the component is mounted.                                                                 |
| `exclude`         | `('recently-used' \| 'smileys_people' \| 'animals_nature' \| 'food_drink' \| 'travel_places' \| 'activities' \| 'objects' \| 'symbols' \| 'flags')[]` | `[]`          | No        | Defines the categories that will be excluded.                                                                                 |
| `onEmojiClick`    | `(emojiObj: {name: string, emoji: string; skinTone: number}) => void`                                                                                 | `undefined`   | Yes       | The function that you pass here will be called whenever an emoji is clicked and the data of that emoji will be passed to you. |

## Notes

- This component library depends on the rem unit so please don't change the font size of the root element in your app or the sizes will be broken.
- If you find any bug send me and email from [here](mailto:dryosefbeder@gmail.com).
- This is an open-source library you can help me improving it or just see the code from [here](https://github.com/yosefbeder/emoji-picker).
- This is my third real project with react so it may not be so good, but I've done my best over the last week to make it like this if you want to see my other projects check my github account from [here](https://github.com/yosefbeder).
