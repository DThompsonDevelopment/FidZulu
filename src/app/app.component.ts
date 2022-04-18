import { Component } from '@angular/core';
import { Items } from './types/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FidZulu';
  items: Items = [{ name: 'boi' }];
}
