import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Items } from 'src/app/types/item';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, OnChanges {
  @Input() items: Items = [];
  @Input() keyOrder: string[] | undefined;

  constructor() {}

  ngOnInit(): void {
    if (this.keyOrder === undefined && this.hasItems()) {
      // ASSUMPTION: first item has all necessary keys
      // Enforces the same property order for all items
      this.setKeyOrderFromItems();
    }
  }

  ngOnChanges(): void {
    if (!this.hasItems()) {
      this.keyOrder = undefined;
      return;
    }
    this.setKeyOrderFromItems();
  }

  private setKeyOrderFromItems() {
    this.keyOrder = Object.keys(this.items[0]);
  }

  hasItems(): boolean {
    return this.items.length > 0;
  }
}