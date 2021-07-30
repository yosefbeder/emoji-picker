export type CategoryType =
  | 'smileys_people'
  | 'animals_nature'
  | 'food_drink'
  | 'travel_places'
  | 'activities'
  | 'objects'
  | 'symbols'
  | 'flags';

export interface EmojiType {
  v: string[];
  n: string;
}

export interface EmojisObjType {
  [emojiName: string]: { v: string[] };
}

export interface EmojisByCategoryType {
  [category: string]: string[];
}

export type AllEmojisType = string[];

export type CategoriesType = CategoryType[];
