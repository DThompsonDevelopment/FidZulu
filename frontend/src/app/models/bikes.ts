import { Item, Value } from '../types/item';
export class Bike implements Item {
  [key: string]: Value;

  constructor(
    public name: string,
    public brand: string,
    public color: string,
    public price: number
  ) {}
}
