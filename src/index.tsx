import React, { useState } from 'react';
// For testing purpose
import ReactDOM from 'react-dom';

import classes from './styles/emoji-picker.module.css';
import CategoriesList from './containers/CategoriesList';
import Searchbar from './components/Searchbar';
import EmojisList from './containers/EmojisList';
import { CategoryType, EmojiPickerProps, EmojiType } from './types';
import categories from './dummy-categories.json';
import emojis from './dummy-emojis.json';

const EmojiPicker: React.FC<EmojiPickerProps> = ({
  theme = 'light',
  size = 'med',
}) => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType>('smileys-emotion');

  const onCategorySelect = (category: CategoryType) =>
    setSelectedCategory(category);

  return (
    <div
      className={`${classes['container']} ${
        classes[`container--${theme}-theme`]
      } ${classes[`container--${size}-size`]}`}
    >
      <CategoriesList
        items={categories as CategoryType[]}
        selected={selectedCategory}
        onCategorySelect={onCategorySelect}
      />
      <Searchbar onSearch={emojiName => console.log(emojiName)} />
      <EmojisList items={emojis as EmojiType[]} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <EmojiPicker />
  </React.StrictMode>,
  document.getElementById('root'),
);
