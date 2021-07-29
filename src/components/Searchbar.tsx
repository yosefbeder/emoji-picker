import React from 'react';
import { SearchbarProps } from '../types/props';
import classes from '../styles/emoji-picker.module.css';

const Searchbar: React.FC<SearchbarProps> = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Emoji Name..."
      className={classes.searchbar}
    />
  );
};

export default Searchbar;
