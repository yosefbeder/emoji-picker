import React, { useEffect, useState } from 'react';
import classes from './styles/emoji-picker.module.css';
import CategoriesList from './containers/CategoriesList';
import Searchbar from './components/Searchbar';
import EmojisList from './containers/EmojisList';
import Footer from './components/Footer';

import { EmojiPickerProps } from './types/props';
import { CategoryType } from './types/data';

// data
import allCategories from './data/categories';
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
  IoTimeOutline,
  IoTime,
} from 'react-icons/io5';
import emojisObj from './data/emojis-obj';
import { getRegex } from './utils/regex';
import { useRef } from 'react';
import { IconType } from 'react-icons/lib';

const icons = new Map<CategoryType, [IconType, IconType]>([
  ['recently-used', [IoTimeOutline, IoTime]],
  ['smileys_people', [IoHappyOutline, IoHappy]],
  ['animals_nature', [IoLeafOutline, IoLeaf]],
  ['food_drink', [IoFastFoodOutline, IoFastFood]],
  ['travel_places', [IoAirplaneOutline, IoAirplane]],
  ['activities', [IoFootballOutline, IoFootball]],
  ['objects', [IoHeadsetOutline, IoHeadset]],
  ['symbols', [IoAlertCircleOutline, IoAlertCircle]],
  ['flags', [IoFlagOutline, IoFlag]],
]);

const getEmojiObjs = (emojis: string[]) => {
  return emojis.map(emoji => {
    return {
      variants: emojisObj[emoji].variants,
      name: emoji,
    };
  });
};

// Recently used

const getRecentlyUsedFromLocalStorage = () => {
  const fromLocalStorage = localStorage.getItem('recently-used');
  const recentlyUsed = fromLocalStorage
    ? JSON.parse(fromLocalStorage)
    : ['sob', 'joy', 'flushed', 'rolling_on_the_floor_laughing', 'sparkles'];
  return recentlyUsed;
};

const getNewRecentlyUsed = (oldRecentlyUsed: string[], newItem: string) => {
  if (oldRecentlyUsed.includes(newItem)) {
    const index = oldRecentlyUsed.indexOf(newItem);
    return [
      newItem,
      ...oldRecentlyUsed.slice(0, index),
      ...oldRecentlyUsed.slice(index + 1),
    ];
  } else {
    return [newItem, ...oldRecentlyUsed];
  }
};

const setRecentlyUsedToLocalStorage = (newRecentlyUsed: string[]) =>
  localStorage.setItem('recently-used', JSON.stringify(newRecentlyUsed));

const EmojiPicker: React.FC<EmojiPickerProps> = ({
  onEmojiClick,
  theme = 'light',
  size = 'med',
  style,
  autoFocus = true,
  defaultSkinTone = 0,
  exclude = [],
}) => {
  // Excluding categories
  const [categories, setCategories] = useState<CategoryType[]>(allCategories);

  // Filtering emojis by category logic
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(
    categories[0],
  );

  useEffect(() => {
    let result: CategoryType[] = [];

    allCategories.forEach(category => {
      if (!exclude.includes(category)) result.push(category);
    });

    if (!result.includes(selectedCategory)) setSelectedCategory(result[0]);

    setCategories(result);
  }, [exclude, selectedCategory]);
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

  // Hovered emoji
  const [hoveredEmoji, setHoveredEmoji] = useState('');

  const onEmojiMouseEnter = (emojiName: string) => setHoveredEmoji(emojiName);

  const onEmojiMouseLeave = () => setHoveredEmoji('');

  // Tones
  const [selectedSkinTone, setSelectedSkinTone] = useState(defaultSkinTone);

  // Recently used
  const [recentlyUsed, setRecentlyUsed] = useState<string[]>(() =>
    getRecentlyUsedFromLocalStorage(),
  );

  const pushToRecentlyUsed = (emojiName: string) => {
    const newRecentlyUsed = getNewRecentlyUsed(recentlyUsed, emojiName);

    setRecentlyUsed(newRecentlyUsed);
    setRecentlyUsedToLocalStorage(newRecentlyUsed);
  };

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
          [icons.get(category)![0], icons.get(category)![1]],
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
            : selectedCategory === 'recently-used'
            ? getEmojiObjs(recentlyUsed)
            : getEmojiObjs(emojisByCategory[selectedCategory])
        }
        onEmojiClick={[onEmojiClick, pushToRecentlyUsed]}
        onEmojiMouseEnter={onEmojiMouseEnter}
        onEmojiMouseLeave={onEmojiMouseLeave}
      />
      <Footer
        showHoveredEmoji={exclude.length < 2}
        hoveredEmoji={hoveredEmoji}
        setSelectedSkinTone={setSelectedSkinTone}
        selectedSkinTone={selectedSkinTone}
      />
    </div>
  );
};

export default EmojiPicker;
