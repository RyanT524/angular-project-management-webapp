import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { SelectCompanyComponent } from './select-company/select-company.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { LoginComponent } from './login/login.component';
import { UserRegistryComponent } from './user-registry/user-registry.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'user-registry', component: UserRegistryComponent },
  { path: 'select-company', component: SelectCompanyComponent },
  { path: 'announcements', component: AnnouncementsComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
