import React, { CSSProperties } from 'react';
import { IconType } from 'react-icons/lib';
import { CategoryType, EmojiType } from './data';

// this type will be improved when i add skin tones
export interface EmojiObjType {
  emoji: string;
  name: string;
}

export interface EmojiPickerProps {
  theme?: 'light' | 'dark';
  size?: 'sm' | 'med' | 'lg';
  style?: CSSProperties;
  autoFocus?: boolean;
  defaultSkinTone?: number;
  exclude?: CategoryType[];
  onEmojiClick: (emojiObj: EmojiObjType) => void;
}

export interface CategoriesListProps {
  items: [CategoryType, [IconType, IconType]][];
  selected: CategoryType;
  onCategorySelect: (category: CategoryType) => void;
}

export interface CategoryProps {
  IconOutlined: IconType;
  IconFilled: IconType;
  isSelected: boolean;
  className?: string;
  onSelect: () => void;
}

export interface SearchbarProps {
  value: string;
  onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface EmojisListProps {
  items: EmojiType[];
  selectedSkinTone: number;
  onEmojiClick: [(emojiObj: EmojiObjType) => void, (emojiName: string) => void];
  onEmojiMouseEnter: (emojiName: string) => void;
  onEmojiMouseLeave: () => void;
}

export interface EmojiProps {
  unicode: string;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export interface FooterProps {
  hoveredEmoji: string;
  setSelectedSkinTone: React.Dispatch<React.SetStateAction<number>>;
  selectedSkinTone: number;
}

export interface SkinToneSelectorProps {
  setSelectedSkinTone: React.Dispatch<React.SetStateAction<number>>;
  selectedSkinTone: number;
}
