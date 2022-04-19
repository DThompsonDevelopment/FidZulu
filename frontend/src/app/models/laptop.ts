import { Item, Value } from '../types/item';

export class Laptop implements Item {
  [key: string]: Value;
  constructor(
    public product: string,
    public brand: string,
    public cpu: string,
    public memory: string,
    public price: number
  ) {}
}
