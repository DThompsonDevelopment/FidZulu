import { Item, Value } from '../types/item';

export class Team implements Item {
  [key: string]: Value;
  constructor(public name: string, public memberNames: string[]) {}
}
