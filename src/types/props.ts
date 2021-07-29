import { CSSProperties } from 'react';
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
  onSearch: (emojiName: string) => void;
}

export interface EmojisListProps {
  items: EmojiType[];
  onEmojiClick: (emojiObj: EmojiObjType) => void;
}

export interface EmojiProps {
  unicode: string;
  onEmojiClick: () => void;
}
