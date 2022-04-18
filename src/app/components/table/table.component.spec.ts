import { Pipe } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { ReplaceUnderscoresPipe } from '../../pipes/replace-underscores.pipe';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  const testItems = [
    { name: 'Chris', location: 'SMT', num: 2 },
    { name: 'Shiv', location: 'NC', num: 1 },
    { name: 'Yahia', location: 'SMT', num: 3 },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent, ReplaceUnderscoresPipe],
    }).compileComponents();
    spyOn(ReplaceUnderscoresPipe.prototype, 'transform').and.returnValue('');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.items = testItems;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a table with correct number of rows + data', () => {
    const compiled = fixture.debugElement.nativeElement;
    const table = compiled.querySelector('table');
    expect(table.rows.length).toBe(4); // accounts for header row
    for (let i = 1; i < table.rows.length; i++) {
      expect(table.rows[i].cells[0].textContent).toBe(testItems[i - 1].name);
      expect(table.rows[i].cells[1].textContent).toBe(
        testItems[i - 1].location
      );
      expect(table.rows[i].cells[2].textContent).toBe(
        testItems[i - 1].num.toString()
      );
    }
  });

  it('should dictate keyorder when provided', () => {
    component.keyOrder = ['num', 'name', 'location'];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const table = compiled.querySelector('table');
    expect(table.rows.length).toBe(4); // accounts for header row
    for (let i = 1; i < table.rows.length; i++) {
      expect(table.rows[i].cells[0].textContent).toBe(
        testItems[i - 1].num.toString()
      );
      expect(table.rows[i].cells[1].textContent).toBe(testItems[i - 1].name);
      expect(table.rows[i].cells[2].textContent).toBe(
        testItems[i - 1].location
      );
    }
  });
});
