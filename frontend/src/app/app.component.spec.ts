import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { Bike } from './models/bikes';
import { Team } from './models/teams';
import { FidzulaService } from './service/fidzula.service';

@Component({
  selector: 'app-table',
  template: '<table></table>',
})
class MockTableComponent {}

@Component({
  selector: 'app-team',
  template: '<ul></ul>',
})
class MockTeamComponent {}

describe('AppComponent', () => {
  let spy: jasmine.SpyObj<FidzulaService> = jasmine.createSpyObj(
    'FidzulaService',
    [
      'getTeam',
      'getBooksWithLocation',
      'getBikesWithLocation',
      'getDvdsWithLocation',
      'getFoodsWithLocation',
      'getLaptopsWithLocation',
      'getToysWithLocation',
    ]
  );
  spy.getTeam.and.returnValue(of(new Team('frontend', ['d'])));
  spy.getBikesWithLocation.and.returnValue(of([]));
  spy.getBooksWithLocation.and.returnValue(of([]));
  spy.getDvdsWithLocation.and.returnValue(of([]));
  spy.getFoodsWithLocation.and.returnValue(of([]));
  spy.getLaptopsWithLocation.and.returnValue(of([]));
  spy.getToysWithLocation.and.returnValue(of([]));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, MockTableComponent, MockTeamComponent],
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

  it('should render team', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.team = new Team('frontend', ['Chris', 'Shiv', 'Yahia']);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('ul')).toBeTruthy();
  });

  it('should call onChangeCategory on click when category changes', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'onChangeCategory').and.callThrough();
    const option = fixture.debugElement
      .query(By.css('.services'))
      .queryAll(By.css('option'))[1];
    option.triggerEventHandler('click', null);
    fixture.whenStable().then(() => {
      expect(app.onChangeCategory).toHaveBeenCalled();
    });
  });

  it('should call onChangeCategory when category changes', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'fetchData').and.callThrough();
    app.onChangeCategory('books');
    expect(app.fetchData).toHaveBeenCalled();
    fixture.whenStable().then(() => {
      expect(spy.getBooksWithLocation.calls.count()).toBe(1);
    });
  });

  it('should call getFoodsWithLocation when category is food', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'fetchData').and.callThrough();
    app.onChangeCategory('food');
    expect(app.fetchData).toHaveBeenCalled();
    console.log(spy.getFoodsWithLocation.calls.count());
    fixture.whenStable().then(() => {
      expect(spy.getFoodsWithLocation.calls.count()).toBe(1);
    });
  });

  it('should call getDvdsWithLocation when category is dvds', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'fetchData').and.callThrough();
    app.onChangeCategory('dvds');
    expect(app.fetchData).toHaveBeenCalled();
    fixture.whenStable().then(() => {
      expect(spy.getDvdsWithLocation.calls.count()).toBe(1);
    });
  });

  it('should call getLaptopsWithLocation when category is laptops', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'fetchData').and.callThrough();
    app.onChangeCategory('laptops');
    expect(app.fetchData).toHaveBeenCalled();
    fixture.whenStable().then(() => {
      expect(spy.getLaptopsWithLocation.calls.count()).toBe(1);
    });
  });

  it('should call getToysWithLocation when category is toys', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'fetchData').and.callThrough();
    app.onChangeCategory('toys');
    expect(app.fetchData).toHaveBeenCalled();
    fixture.whenStable().then(() => {
      expect(spy.getToysWithLocation.calls.count()).toBe(1);
    });
  });

  it('should not call onChangeCategory when category is the same', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'fetchData');
    app.onChangeCategory('bikes');
    expect(app.fetchData).not.toHaveBeenCalled();
  });

  it('should call onChangeLocation on click when location changes', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'onChangeLocation').and.callThrough();
    const option = fixture.debugElement
      .query(By.css('.locations'))
      .queryAll(By.css('option'))[1];
    option.triggerEventHandler('click', null);
    fixture.whenStable().then(() => {
      expect(app.onChangeLocation).toHaveBeenCalled();
    });
  });

  it('should call onChangeLocation when location changes', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'fetchData');
    app.onChangeLocation('Durham');
    expect(app.fetchData).toHaveBeenCalled();
  });

  it('should not call onChangeLocation when location is the same', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'fetchData');
    app.onChangeLocation('Raleigh');
    expect(app.fetchData).not.toHaveBeenCalled();
  });
});
