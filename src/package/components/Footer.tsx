import React from 'react';
import classes from '../styles/emoji-picker.module.css';
import { FooterProps, SkinToneSelectorProps } from '../types/props';
import { normalize } from '../utils/strings';

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
  showHoveredEmoji,
}) => {
  return (
    <div
      className={`${classes.footer} ${
        showHoveredEmoji ? '' : classes['footer--skin-tone-selector-only']
      }`}
    >
      <div className={classes['hovered-emoji']}>
        {normalize(hoveredEmoji) || 'no emoji is hovered'}
      </div>
      <SkinToneSelector
        setSelectedSkinTone={setSelectedSkinTone}
        selectedSkinTone={selectedSkinTone}
      />
    </div>
  );
};

export default Footer;
