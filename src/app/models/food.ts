import { Item, Value } from '../types/item';

export class Food implements Item {
  [key: string]: Value;
  constructor(
    public name: string,
    public brand: string,
    public weight: string,
    public calories: number,
    public price: number
  ) {}
}
