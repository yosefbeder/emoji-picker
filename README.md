# React Emoji Picker

![Themes](https://user-images.githubusercontent.com/78495625/128736983-b280e2c3-c691-43f8-b1a7-7d9e65dfe7de.png)

A simple and useful emoji-picker without much configurations 😎.

You can try to play with the configurations from this [Demo Project](https://yosefbeder.github.io/react-emoji-picker/).

## Installation

You can install it with either

```bash
npm install @yosefbeder/react-emoji-picker
```

or

```bash
yarn add @yosefbeder/react-emoji-picker
```

## Usage

To start using the component you shouldn't add any configs except `onEmojiClick`.

Most of the configs focuses on customizing the way it looks (You can play with then from [here](https://yosefbeder.github.io/react-emoji-picker/)).

```javascript
import React from 'react';
import EmojiPicker from '@yosefbeder/react-emoji-picker';

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

### Types

```typescript
type Theme = 'light' | 'dark';

type Size = 'sm' | 'med' | 'lg';

type Category =
  | 'recently-used'
  | 'smileys_people'
  | 'animals_nature'
  | 'food_drink'
  | 'travel_places'
  | 'activities'
  | 'objects'
  | 'symbols'
  | 'flags';

interface EmojiObj {
  emoji: string;
  name: string;
  skinTone: number;
}
```

### Props

| Name              | Type       | Default Value | Required? | Description                                                                            |
| ----------------- | ---------- | ------------- | --------- | -------------------------------------------------------------------------------------- |
| `theme`           | `String`   | `'light'`     | No        | Of the type `Theme`.                                                                   |
| `size`            | `String`   | `'med'`       | No        | Of the type `Size`.                                                                    |
| `style`           | `Object`   | `undefined`   | No        | Overrides the styles of the container and it's useful for positioning.                 |
| `autoFocus`       | `Boolean`  | `true`        | No        | Focuses the searching bar when the component is mounted.                               |
| `defaultSkinTone` | `Number`   | 0             | No        | The selected skin tone when the component is mounted, It can be a number between 0 & 6 |
| `exclude`         | `Array`    | `[]`          | No        | The categories that will be excluded, It's an array of `Category`.                     |
| `onEmojiClick`    | `Function` | `undefined`   | Yes       | This passes `EmojiObj` to you as an argument.                                          |

## Notes

- This component library depends on the rem unit so please don't change the font size of the root element in your app or the sizes will be broken.
- If you find any bug send me and email from [here](mailto:dryosefbeder@gmail.com).
- This is an open-source library you can help me improving it or just see the code from [here](https://github.com/yosefbeder/emoji-picker).
- This is my third real project with react so it may not be so good, but I've done my best over the last week to make it like this if you want to see my other projects check my github account from [here](https://github.com/yosefbeder).

## License

[MIT License](LICENSE)

Copyright (c) 2021 [yosefbeder](https://github.com/yosefbeder)
