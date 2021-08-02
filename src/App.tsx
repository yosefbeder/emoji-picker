import React, { useState } from 'react';
import EmojiPicker from './package';
import { RadioGroup, Radio, FormControlLabel, FormControl, FormLabel, Checkbox, FormGroup, ThemeProvider, Typography } from '@material-ui/core';
import categories from './package/data/categories';
import { createTheme } from '@material-ui/core';

// tyeps
import {CategoryType} from './package/types/data'
type ThemeType = 'light'|'dark';
type SizeType = 'sm'|'med'|'lg';

const MaterialUITheme = createTheme({
  palette: {
    primary: {
      main: 'hsl(180, 65%, 50%)',
    }
  },
})

const capitalize = (w: string) => w[0].toUpperCase().concat(w.slice(1))

const App = () => {
  const [theme, setTheme] = useState<ThemeType>('light');
  const [size, setSize] = useState<SizeType>('med');
  const [exclude, setExclude] = useState<CategoryType[]>([]);

  return (
    <div className="app">
      <Typography variant="h4">Component</Typography>        
      <EmojiPicker onEmojiClick={emojiObj => alert(JSON.stringify(emojiObj, null, 2))} theme={theme} size={size} exclude={exclude} />
      <Typography variant="h4">Configurations</Typography>        
      <div className="app__configs">
        <ThemeProvider theme={MaterialUITheme}>
          <FormControl size="small" >
            <FormLabel>Theme</FormLabel>
            <RadioGroup value={theme} onChange={e => setTheme(e.target.value as ThemeType)} >
              <FormControlLabel value="light" control={<Radio color="primary" />}  label="Light"/>
              <FormControlLabel value="dark" control={<Radio color="primary" />}  label="Dark"/>
            </RadioGroup>
          </FormControl>
          <FormControl size="small" >
            <FormLabel>Size</FormLabel>
            <RadioGroup value={size} onChange={e => setSize(e.target.value as SizeType)} >
              <FormControlLabel value="lg" control={<Radio color="primary" />}  label="Large"/>
              <FormControlLabel value="med" control={<Radio color="primary" />}  label="Medium"/>
              <FormControlLabel value="sm" control={<Radio color="primary" />}  label="Small"/>
            </RadioGroup>
          </FormControl>
          <FormControl size="small" >
            <FormLabel>Categroies</FormLabel>
            <FormGroup>
              {categories.map((category, index) => <FormControlLabel key={index} control={<Checkbox color="primary" checked={!exclude.includes(category)} onClick={() => setExclude(prev => prev.includes(category)? [...prev.slice(0, prev.indexOf(category)), ...prev.slice(prev.indexOf(category) + 1)]: [...prev, category])}/>} label={category.split('_').map(w => capitalize(w)).join(' & ')} />)}
            </FormGroup>
          </FormControl>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default App;
