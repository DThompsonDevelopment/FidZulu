import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { FidzulaService } from './service/fidzula.service';

@Component({
  selector: 'app-table',
  template: '<table></table>',
})
class MockTableComponent {}

describe('AppComponent', () => {
  let spy: any = jasmine.createSpyObj('FidzulaService', [
    'getTeam',
    'getBooksWithLocation',
    'getBikesWithLocation',
    'getDvdsWithLocation',
    'getFoodsWithLocation',
    'getLaptopsWithLocation',
    'getToysWithLocation',
  ]);
  spy.getTeam.and.returnValue(of({}));
  spy.getBikesWithLocation.and.returnValue(of({}));
  spy.getBooksWithLocation.and.returnValue(of({}));
  spy.getDvdsWithLocation.and.returnValue(of({}));
  spy.getFoodsWithLocation.and.returnValue(of({}));
  spy.getLaptopsWithLocation.and.returnValue(of({}));
  spy.getToysWithLocation.and.returnValue(of({}));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, MockTableComponent],
      providers: [{ provide: FidzulaService, useValue: spy }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'FidZulu'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('FidZulu');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('header h1')?.textContent).toContain(
      'FidZulu'
    );
  });

  it('should render table', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('table')).toBeTruthy();
  });
});
