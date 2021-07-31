import React from 'react';
import ReactDOM from 'react-dom';

import EmojiPicker from './package';

ReactDOM.render(
  <React.StrictMode>
    <EmojiPicker onEmojiClick={emojiObj => console.log(emojiObj)} />
  </React.StrictMode>,
  document.getElementById('root'),
);
