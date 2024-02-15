import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Team } from 'src/app/types/team';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css'],
})
export class TeamCardComponent {
  @Input()
  team!: Team;

  projectCount = 0;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getProjects(this.team.id!)
      .subscribe((projects) => (this.projectCount = projects.length));
  }
}
