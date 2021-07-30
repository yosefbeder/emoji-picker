import React from 'react';
import Emoji from '../components/Emoji';
import classes from '../styles/emoji-picker.module.css';
import { EmojisListProps } from '../types/props';

const EmojisList: React.FC<EmojisListProps> = ({
  selectedSkinTone,
  items,
  onEmojiClick,
  onEmojiMouseEnter,
  onEmojiMouseLeave,
}) => {
  return (
    <div className={classes['emojis-list']}>
      {items.map(({ v, n }, index) => {
        let u: string;

        if (v.length === 1) u = v[0];
        else u = v[selectedSkinTone];

        return (
          <Emoji
            key={index}
            unicode={u}
            onClick={() => onEmojiClick({ emoji: u, name: n })}
            onMouseEnter={() => onEmojiMouseEnter(n)}
            onMouseLeave={onEmojiMouseLeave}
          />
        );
      })}
    </div>
  );
};

export default EmojisList;
