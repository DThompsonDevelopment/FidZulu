import { Item, Value } from '../types/item';

export class Book implements Item {
  [key: string]: Value;

  constructor(
    public title: string,
    public author: string,
    public price: number,
    public isbn: string,
    public publisher: string
  ) {}
}
