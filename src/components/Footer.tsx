import React from 'react';
import classes from '../styles/emoji-picker.module.css';
import { FooterProps, SkinToneSelectorProps } from '../types/props';

const SkinToneSelector: React.FC<SkinToneSelectorProps> = ({
  setSelectedSkinTone,
  selectedSkinTone,
}) => {
  return (
    <div className={classes['skin-tone-selector']}>
      {(() => {
        const elements = [];

        for (let i = 0; i < 6; i++) {
          elements.push(
            <div
              key={i}
              className={`${classes['skin-tone']} ${
                classes[`skin-tone--${i}`]
              } ${
                selectedSkinTone === i ? classes['skin-tone--selected'] : ''
              }`}
              onClick={() => setSelectedSkinTone(i)}
            ></div>,
          );
        }

        return elements;
      })()}
    </div>
  );
};

const Footer: React.FC<FooterProps> = ({
  hoveredEmoji,
  setSelectedSkinTone,
  selectedSkinTone,
}) => {
  return (
    <div className={classes.footer}>
      <div className={classes['hovered-emoji']}>
        {hoveredEmoji.split(/-|_/g).join(' ') || 'no emoji is hovered'}
      </div>
      <SkinToneSelector
        setSelectedSkinTone={setSelectedSkinTone}
        selectedSkinTone={selectedSkinTone}
      />
    </div>
  );
};

export default Footer;
