import React from 'react';
import { EmojiProps } from '../types';
import classes from '../styles/emoji-picker.module.css';

const Emoji: React.FC<EmojiProps> = ({ unicode, onEmojiClick }) => {
  return (
    <div className={classes.emoji} onClick={onEmojiClick}>
      {unicode}
    </div>
  );
};

export default Emoji;
