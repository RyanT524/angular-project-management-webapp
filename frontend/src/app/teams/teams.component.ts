import { Component } from '@angular/core';
import { Team } from '../types/team';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent {
  userIsAdmin: boolean = false;
  teams: Team[] = [];
  createTeamShown: boolean = false;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    // Check for logged in currentUser
    this.dataService.currentUser.subscribe((user) => {
      if (!user) {
        this.router.navigateByUrl('/login');
        return;
      }
      this.userIsAdmin = user.admin;
      this.dataService.loadTeams();
      this.dataService.teams.subscribe((teams) => (this.teams = teams));
    });
  }

  navigateToProjectView(teamToView: Team) {
    this.dataService.setTeamToView(teamToView);
    this.router.navigateByUrl('/projects');
  }

  closeModal(): void {
    this.createTeamShown = false;
  }
}
