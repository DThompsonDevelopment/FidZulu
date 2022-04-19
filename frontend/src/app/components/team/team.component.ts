import { Component, Input } from '@angular/core';
import { Team } from 'src/app/models/teams';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent {
  @Input() team: Team | undefined;

  constructor() {}
}
