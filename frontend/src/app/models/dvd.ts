import { Item, Value } from '../types/item';

export class Dvd implements Item {
  [key: string]: Value;

  constructor(
    public title: string,
    public rating: string,
    public studio: string,
    public time: number,
    public price: number
  ) {}
}
