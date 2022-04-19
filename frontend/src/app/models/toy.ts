import { Item, Value } from '../types/item';

export class Toy implements Item {
  [key: string]: Value;

  constructor(
    public name: string,
    public brand: string,
    public age_group: string,
    public price: number
  ) {}
}
