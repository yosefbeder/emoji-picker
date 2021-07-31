import React from 'react';
import EmojiPicker from './package';

const App = () => {
  return (
    <div className="app">
      <EmojiPicker onEmojiClick={emojiObj => console.log(emojiObj)} />
    </div>
  );
};

export default App;
