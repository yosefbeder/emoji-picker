import React, { useEffect, useState } from 'react';
// For testing purpose
import ReactDOM from 'react-dom';

import classes from './styles/emoji-picker.module.css';
import CategoriesList from './containers/CategoriesList';
import Searchbar from './components/Searchbar';
import EmojisList from './containers/EmojisList';
import Footer from './components/Footer';

import { EmojiPickerProps } from './types/props';
import { CategoryType } from './types/data';

// data
import categories from './data/categories';
import emojisByCategory from './data/emojis-by-category';
import allEmojis from './data/all-emojis';

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
import { getRegex } from './utils/regex';
import { useRef } from 'react';

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

const getEmojiObjs = (emojis: string[]) => {
  return emojis.map(emoji => {
    return {
      v: emojisObj[emoji].v,
      n: emoji,
    };
  });
};

const EmojiPicker: React.FC<EmojiPickerProps> = ({
  theme = 'light',
  size = 'med',
  onEmojiClick,
  style,
  autoFocus = true,
}) => {
  // Filtering emojis by category logic
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType>('smileys_people');

  const onCategorySelect = (category: CategoryType) =>
    setSelectedCategory(category);

  // Searching logic
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEmojis, setFilteredEmojis] = useState<string[]>([]);

  const onSearch = (query: string) => {
    const regex = getRegex(query);

    setFilteredEmojis(allEmojis.filter(emoji => regex.test(emoji)));
  };

  useEffect(() => {
    if (!searchQuery) setFilteredEmojis([]);
    else onSearch(searchQuery);
  }, [searchQuery]);

  // Auto focusing logic
  const searchbarRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) searchbarRef.current!.focus();
  }, []);

  // hovered emoji
  const [hoveredEmoji, setHoveredEmoji] = useState('');

  const onEmojiMouseEnter = (emojiName: string) => setHoveredEmoji(emojiName);

  const onEmojiMouseLeave = () => setHoveredEmoji('');

  // tones
  const [selectedSkinTone, setSelectedSkinTone] = useState(4);

  return (
    <div
      className={`${classes['container']} ${
        classes[`container--${theme}-theme`]
      } ${classes[`container--${size}-size`]}`}
      style={style}
    >
      <CategoriesList
        items={categories.map((category, index) => [
          category,
          [icons[index][0], icons[index][1]],
        ])}
        selected={selectedCategory}
        onCategorySelect={onCategorySelect}
      />
      <Searchbar
        value={searchQuery}
        onValueChange={e => setSearchQuery(e.target.value)}
        ref={searchbarRef}
      />
      <EmojisList
        selectedSkinTone={selectedSkinTone}
        items={
          searchQuery
            ? getEmojiObjs(filteredEmojis)
            : getEmojiObjs(emojisByCategory[selectedCategory])
        }
        onEmojiClick={onEmojiClick}
        onEmojiMouseEnter={onEmojiMouseEnter}
        onEmojiMouseLeave={onEmojiMouseLeave}
      />
      <Footer
        hoveredEmoji={hoveredEmoji}
        setSelectedSkinTone={setSelectedSkinTone}
        selectedSkinTone={selectedSkinTone}
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
