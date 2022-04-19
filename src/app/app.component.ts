import { Component, OnInit } from '@angular/core';
import { Team } from './models/teams';
import { FidzulaService } from './service/fidzula.service';
import { Item, Items } from './types/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'FidZulu';
  items: Items = [];
  category = 'bikes';
  location = 'Raleigh';
  team: Team | undefined;

  constructor(private service: FidzulaService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  onChangeCategory(newValue: string) {
    if (this.category === newValue) return;
    this.category = newValue;
    this.fetchData();
  }

  onChangeLocation(newValue: string) {
    if (this.location === newValue) return;
    this.location = newValue;
    this.fetchData();
  }

  fetchData() {
    this.service.getTeam(this.category).subscribe((data) => (this.team = data));
    switch (this.category) {
      case 'bikes':
        this.service
          .getBikesWithLocation(this.location)
          .subscribe((data) => (this.items = data));
        break;

      case 'books':
        this.service
          .getBooksWithLocation(this.location)
          .subscribe((data) => (this.items = data));
        break;

      case 'dvds':
        this.service
          .getDvdsWithLocation(this.location)
          .subscribe((data) => (this.items = data));
        break;

      case 'food':
        this.service
          .getFoodsWithLocation(this.location)
          .subscribe((data) => (this.items = data));
        break;

      case 'laptops':
        this.service
          .getLaptopsWithLocation(this.location)
          .subscribe((data) => (this.items = data));
        break;

      case 'toys':
        this.service
          .getToysWithLocation(this.location)
          .subscribe((data) => (this.items = data));
        break;

      default:
        this.items = [];
        break;
    }
  }
}
