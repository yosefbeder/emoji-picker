import React from 'react';
import Emoji from '../components/Emoji';
import classes from '../styles/emoji-picker.module.css';
import { EmojisListProps } from '../types/props';
import { normalize } from '../utils/strings';

const EmojisList: React.FC<EmojisListProps> = ({
  selectedSkinTone,
  items,
  onEmojiClick,
  onEmojiMouseEnter,
  onEmojiMouseLeave,
}) => {
  return (
    <div className={classes['emojis-list']}>
      {items.map(({ name, variants }, index) => {
        let unicode: string;

        if (variants.length === 1) unicode = variants[0];
        else unicode = variants[selectedSkinTone];

        return (
          <Emoji
            key={index}
            unicode={unicode}
            onClick={() => {
              onEmojiClick[0]({
                emoji: unicode,
                name: normalize(name),
                skinTone: variants.length === 1 ? 0 : selectedSkinTone,
              });
              onEmojiClick[1](name);
            }}
            onMouseEnter={() => onEmojiMouseEnter(name)}
            onMouseLeave={onEmojiMouseLeave}
          />
        );
      })}
    </div>
  );
};

export default EmojisList;
