import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Team } from './types/team';
import { Project } from './types/project';
import { FullUser } from './types/full-user';
import { BehaviorSubject } from 'rxjs';
import { LoganRoy } from 'src/data';
import Announcement from './types/announcement';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // TODO: REMOVE HARDCODED COMPANY
  currentCompanyId: number | undefined = undefined;

  // TODO: REMOVE HARDCODED USER
  private currentUserSource = new BehaviorSubject<FullUser | null>(null);
  currentUser = this.currentUserSource.asObservable();

  private teamToViewSource = new BehaviorSubject<Team | null>(null);
  teamToView = this.teamToViewSource.asObservable();

  private teamsSource = new BehaviorSubject<Team[]>([]);
  teams = this.teamsSource.asObservable();

  private projectsToViewSource = new BehaviorSubject<Project[]>([]);
  projectsToView = this.projectsToViewSource.asObservable();

  constructor(private http: HttpClient) {}

  getAnnouncements() {
    return this.http.get<Announcement[]>(
      `api/company/${this.currentCompanyId}/announcements`
    );
  }

  createAnnouncement(announcement: Announcement) {
    return this.http.post<Announcement>(
      `api/company/${this.currentCompanyId}/announcements`,
      announcement
    );
  }

  loadTeams() {
    if (this.currentUserSource.getValue()!.admin) {
      this.http
        .get<Team[]>(`api/company/${this.currentCompanyId}/teams`)
        .subscribe((teams) => this.teamsSource.next(teams));
    } else {
      this.http
        .get<Team[]>(
          `api/team/userTeams/${this.currentUserSource.getValue()!.id}`
        )
        .subscribe((teams) => this.teamsSource.next(teams));
    }
  }

  addTeam(newTeam: Team) {
    this.teamsSource.next([...this.teamsSource.getValue(), newTeam]);
  }

  createTeam(team: Team) {
    return this.http.post<Team>(
      `api/company/${this.currentCompanyId}/teams`,
      team
    );
  }

  loadProjects(teamId: number) {
    this.http
      .get<Project[]>(
        `api/company/${this.currentCompanyId}/teams/${teamId}/projects`
      )
      .subscribe((response) => this.projectsToViewSource.next(response));
  }

  getProjects(teamId: number) {
    return this.http.get<Project[]>(
      `api/company/${this.currentCompanyId}/teams/${teamId}/projects`
    );
  }

  getCompanyUsers() {
    return this.http.get<FullUser[]>(
      `api/company/${this.currentCompanyId}/users`
    );
  }

  setTeamToView(team: Team): void {
    this.teamToViewSource.next(team);
  }

  createProject(name: string, description: string) {
    const team = this.teamToViewSource.getValue();
    let projectToCreate = {
      name,
      description,
      active: true,
      team: team as Team,
    };
    this.http
      .post<Project>(
        `api/company/${this.currentCompanyId}/teams/${team?.id}/projects/${
          this.currentUserSource.getValue()!.id
        }`,
        projectToCreate
      )
      .subscribe((response) => {
        this.projectsToViewSource.next([
          ...this.projectsToViewSource.getValue(),
          response,
        ]);
      });
  }

  updateProject(project: Project) {
    this.http
      .put<Project>(`api/projects/${project.id}`, project)
      .subscribe((updatedProject) => {
        this.projectsToViewSource.next(
          this.projectsToViewSource
            .getValue()
            .map((project) =>
              project.id !== updatedProject.id ? project : updatedProject
            )
        );
      });
  }

  setCurrentUser(user: FullUser | null) {
    this.currentUserSource.next(user);
  }

  updateCompanyId(newCompanyId: number | undefined) {
    this.currentCompanyId = newCompanyId;
  }

  login(username: string, password: string) {
    let loginData = {
      username,
      password,
    };
    return this.http.post<FullUser>(`api/users/login`, loginData);
  }

  createUser(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    admin: boolean
  ) {
    let newUser = {
      credentials: {
        username: email,
        password: password,
      },
      profile: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: '',
      },
      admin: admin,
    };
    return this.http.post<FullUser>(`api/company/${this.currentCompanyId}/users`, newUser);
  }

  editUser(
    userId: number,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    admin: boolean
  ) {
    console.log('got here editting user', userId);
    let edittedUser = {
      credentials: {
        username: 'username',
        password: 'password',
      },
      profile: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phoneNumber,
      },
      admin: admin,
    };
    return this.http.patch<FullUser>(`api/users/${userId}`, edittedUser);
  }

  deleteUser(userId: number) {
    return this.http.delete(`api/users/users/delete/${userId}`);
  }
}
