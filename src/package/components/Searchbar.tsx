import React from 'react';
import { SearchbarProps } from '../types/props';
import classes from '../../../styles/emoji-picker.module.css';

const Searchbar = React.forwardRef<HTMLInputElement, SearchbarProps>(
  ({ value, onValueChange }, ref) => {
    return (
      <input
        type="text"
        placeholder="Emoji Name..."
        className={classes.searchbar}
        value={value}
        onChange={onValueChange}
        ref={ref}
      />
    );
  },
);

export default Searchbar;
