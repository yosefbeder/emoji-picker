import React from 'react';
import Emoji from '../components/Emoji';
import classes from '../styles/emoji-picker.module.css';
import { EmojisListProps } from '../types/props';

const EmojisList: React.FC<EmojisListProps> = ({ items, onEmojiClick }) => {
  return (
    <div className={classes['emojis-list']}>
      {items.map(({ u, n }, index) => {
        return (
          <Emoji
            key={index}
            unicode={u}
            onEmojiClick={() => onEmojiClick({ emoji: u, name: n })}
          />
        );
      })}
    </div>
  );
};

export default EmojisList;
