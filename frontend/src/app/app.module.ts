import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { NameToInitialPipe } from './navbar/name-to-initial.pipe';
import { TeamsComponent } from './teams/teams.component';
import { TeamCardComponent } from './teams/team-card/team-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateTeamComponent } from './teams/create-team/create-team.component';
import { SelectCompanyComponent } from './select-company/select-company.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { NameCardComponent } from './teams/name-card/name-card.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LoginComponent } from './login/login.component';
import { UserRegistryComponent } from './user-registry/user-registry.component';
import { AnnouncementComponent } from './announcements/announcement/announcement.component';
import { CreateAnnouncementComponent } from './announcements/create-announcement/create-announcement.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './projects/project-card/project-card.component';
import { CreateProjectComponent } from './projects/create-project/create-project.component';
import { EditProjectComponent } from './projects/edit-project/edit-project.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NameToInitialPipe,
    TeamsComponent,
    TeamCardComponent,
    CreateTeamComponent,
    SelectCompanyComponent,
    AnnouncementsComponent,
    NameCardComponent,
    DropdownComponent,
    LoginComponent,
    UserRegistryComponent,
    ProjectsComponent,
    ProjectCardComponent,
    CreateProjectComponent,
    EditProjectComponent,
    AnnouncementComponent,
    CreateAnnouncementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
