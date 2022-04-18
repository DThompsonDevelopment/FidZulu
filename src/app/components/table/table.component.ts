import { Component, Input, OnInit } from '@angular/core';
import { Items } from 'src/app/types/item';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() items: Items = [];
  @Input() keyOrder: string[] | undefined;

  constructor() {}

  ngOnInit(): void {
    if (this.keyOrder === undefined) {
      // ASSUMPTION: first item has all necessary keys
      // Enforces the same property order for all items
      this.keyOrder = Object.keys(this.items[0]);
    }
  }
}
