export type Value = string | number | Value[];
export interface Item {
  [key: string]: Value;
}
export type Items = Item[];
