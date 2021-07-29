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
  n: string;
  u: string;
}

export interface EmojisObjType {
  [emojiName: string]: { u: string };
}

export interface EmojisByCategoryType {
  [category: string]: string[];
}

export type AllEmojisType = string[];

export type CategoriesType = CategoryType[];
