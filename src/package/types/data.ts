export type CategoryType =
  | 'recently-used'
  | 'smileys_people'
  | 'animals_nature'
  | 'food_drink'
  | 'travel_places'
  | 'activities'
  | 'objects'
  | 'symbols'
  | 'flags';

export interface EmojiType {
  variants: string[];
  name: string;
}

export interface EmojisObjType {
  [emojiName: string]: { variants: string[] };
}

export interface EmojisByCategoryType {
  [category: string]: string[];
}

export type AllEmojisType = string[];

export type CategoriesType = CategoryType[];
