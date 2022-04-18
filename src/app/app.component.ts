import { Component, OnInit } from '@angular/core';
import { FidzulaService } from './service/fidzula.service';
import { Item, Items } from './types/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'FidZulu';
  items: Items = [{ name: 'boi' }];
  category = 'bikes';
  team: Item | undefined;

  constructor(private service: FidzulaService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  onChange(newValue: string) {
    if (this.category === newValue) return;
    this.category = newValue;
    this.fetchData();
  }

  private fetchData() {
    // TODO: call functions and fetch team
    switch (this.category) {
      case 'bikes':
        this.items = [{ bike: 'ya' }];
        break;

      case 'books':
        this.items = [{ books: 'nah' }];
        break;

      case 'dvds':
        this.items = [{ dvd: 'title' }];
        break;

      case 'food':
        this.items = [];
        break;

      case 'laptops':
        this.items = [];
        break;

      case 'toys':
        this.items = [];
        break;

      default:
        this.items = [];
        break;
    }
  }
}
