import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Team } from '../types/team';
import { Router } from '@angular/router';
import { Project } from '../types/project';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  userIsAdmin: boolean = false;
  team: Team | null = null;
  createProjectShown: boolean = false;
  editProjectShown: boolean = false;
  projectToEdit: Project | null = null;

  projects: Project[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.currentUser.subscribe((user) => {
      if (!user) {
        this.router.navigateByUrl('/login');
        return;
      }
      this.userIsAdmin = user!.admin;
    });
    this.dataService.teamToView.subscribe((team) => (this.team = team));
    if (!this.team || !this.team.id) {
      this.router.navigateByUrl('/teams');
      return;
    } else {
      this.dataService.loadProjects(this.team.id!);
      this.dataService.projectsToView.subscribe(
        (projects) => (this.projects = projects)
      );
    }
  }

  openEditDialogue(project: Project): void {
    this.projectToEdit = project;
    this.editProjectShown = true;
  }

  closeCreateProject(): void {
    this.createProjectShown = false;
  }

  closeEditProject(): void {
    this.editProjectShown = false;
  }

  navigateToTeams(): void {
    this.router.navigateByUrl('/teams');
  }
}
