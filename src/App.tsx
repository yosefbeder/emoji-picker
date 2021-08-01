import React, { useState } from 'react';
import EmojiPicker from './package';
import { RadioGroup, Radio, FormControlLabel, FormControl, FormLabel, Checkbox, FormGroup } from '@material-ui/core';
import {CategoryType} from './package/types/data'
import categories from './package/data/categories';

type ThemeType = 'light'|'dark';

const App = () => {
  const [theme, setTheme] = useState<ThemeType>('light');
  const [exclude, setExclude] = useState<CategoryType[]>([]);

  return (
    <div className="app">
      <EmojiPicker onEmojiClick={emojiObj => console.log(emojiObj)} theme={theme} exclude={exclude} />
      <div className="app__configs">
        <FormControl>
          <FormLabel>Theme</FormLabel>
          <RadioGroup value={theme} onChange={e => setTheme(e.target.value as ThemeType)} >
            <FormControlLabel value="light" control={<Radio color="primary" />}  label="Light theme"/>
            <FormControlLabel value="dark" control={<Radio color="primary" />}  label="Dark theme"/>
          </RadioGroup>
        </FormControl>
        <FormControl size="small">
          <FormLabel>Categroies</FormLabel>
          <FormGroup >
        {categories.map(category => <FormControlLabel control={<Checkbox color="primary" checked={!exclude.includes(category)} onClick={() => setExclude(prev => prev.includes(category)? [...prev.slice(0, prev.indexOf(category)), ...prev.slice(prev.indexOf(category) + 1)]: [...prev, category])}/>} label={category} />)}
          </FormGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default App;
