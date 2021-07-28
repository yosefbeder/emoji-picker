import React from 'react';
import Emoji from '../components/Emoji';
import classes from '../styles/emoji-picker.module.css';
import { EmojisListProps } from '../types';

const EmojisList: React.FC<EmojisListProps> = ({ items }) => {
  return (
    <div className={classes['emojis-list']}>
      {items.map(({ character: unicode }, index) => {
        return <Emoji key={index} unicode={unicode} onEmojiClick={() => {}} />;
      })}
    </div>
  );
};

export default EmojisList;
