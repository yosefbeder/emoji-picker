import React from 'react';
import { EmojiProps } from '../types/props';
import classes from '../styles/emoji-picker.module.css';

const Emoji: React.FC<EmojiProps> = ({
  unicode,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className={classes.emoji}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {unicode}
    </div>
  );
};

export default Emoji;
