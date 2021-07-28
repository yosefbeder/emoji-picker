import { IconType } from 'react-icons/lib';

export interface EmojiPickerProps {
  theme?: 'light' | 'dark';
  size?: 'sm' | 'med' | 'lg';
}

export type CategoryType =
  | 'smileys-emotion'
  | 'people-body'
  | 'animals-nature'
  | 'food-drink'
  | 'travel-places'
  | 'activities'
  | 'objects'
  | 'symbols'
  | 'flags';

export interface EmojiType {
  slug: string;
  character: string;
  unicodeName: string;
  codePoint: string;
  group: string;
  subGroup: string;
}

export interface CategoriesListProps {
  items: CategoryType[];
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
}

export interface EmojiProps {
  unicode: string;
  onEmojiClick: () => void;
}
