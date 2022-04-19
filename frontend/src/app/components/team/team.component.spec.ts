import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Team } from 'src/app/models/teams';

import { TeamComponent } from './team.component';

describe('TeamComponent', () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render team when data is falsy', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('ul')).toBeFalsy();
  });

  it('should display correct number of members', () => {
    component.team = new Team('frontend', ['Chris', 'Shiv', 'Yahia']);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('li')).toHaveSize(3);
  });

  it('should display correct members names', () => {
    component.team = new Team('frontend', ['Chris', 'Shiv', 'Yahia']);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const listItems = compiled.querySelectorAll('li');
    expect(listItems.item(0).textContent).toBe('Chris');
    expect(listItems.item(1).textContent).toBe('Shiv');
    expect(listItems.item(2).textContent).toBe('Yahia');
  });
});
