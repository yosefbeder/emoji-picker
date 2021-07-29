import React, { useState } from 'react';
// For testing purpose
import ReactDOM from 'react-dom';

import classes from './styles/emoji-picker.module.css';
import CategoriesList from './containers/CategoriesList';
import Searchbar from './components/Searchbar';
import EmojisList from './containers/EmojisList';

import { EmojiPickerProps } from './types/props';
import { CategoryType } from './types/data';

// data
import categories from './data/categories';
import emojisByCategory from './data/emojis-by-category';

import {
  IoHappyOutline,
  IoHappy,
  IoLeafOutline,
  IoLeaf,
  IoFastFoodOutline,
  IoFastFood,
  IoAirplaneOutline,
  IoAirplane,
  IoFootballOutline,
  IoFootball,
  IoHeadsetOutline,
  IoHeadset,
  IoAlertCircleOutline,
  IoAlertCircle,
  IoFlagOutline,
  IoFlag,
} from 'react-icons/io5';
import emojisObj from './data/emojis-obj';

const icons = [
  [IoHappyOutline, IoHappy],
  [IoLeafOutline, IoLeaf],
  [IoFastFoodOutline, IoFastFood],
  [IoAirplaneOutline, IoAirplane],
  [IoFootballOutline, IoFootball],
  [IoHeadsetOutline, IoHeadset],
  [IoAlertCircleOutline, IoAlertCircle],
  [IoFlagOutline, IoFlag],
];

const EmojiPicker: React.FC<EmojiPickerProps> = ({
  theme = 'light',
  size = 'med',
  onEmojiClick,
}) => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType>('smileys_people');

  const onCategorySelect = (category: CategoryType) =>
    setSelectedCategory(category);

  return (
    <div
      className={`${classes['container']} ${
        classes[`container--${theme}-theme`]
      } ${classes[`container--${size}-size`]}`}
    >
      <CategoriesList
        items={categories.map((category, index) => [
          category,
          [icons[index][0], icons[index][1]],
        ])}
        selected={selectedCategory}
        onCategorySelect={onCategorySelect}
      />
      <Searchbar onSearch={emojiName => console.log(emojiName)} />
      <EmojisList
        items={emojisByCategory[selectedCategory].map(emoji => {
          return {
            u: emojisObj[emoji].u,
            n: emoji,
          };
        })}
        onEmojiClick={onEmojiClick}
      />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <EmojiPicker onEmojiClick={emojiObj => console.log(emojiObj)} />
  </React.StrictMode>,
  document.getElementById('root'),
);
