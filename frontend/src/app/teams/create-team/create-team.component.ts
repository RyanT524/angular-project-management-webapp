import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { NameToInitialPipe } from 'src/app/navbar/name-to-initial.pipe';
import { BasicUser } from 'src/app/types/basic-user';
import { FullUser, defaultFullUser } from 'src/app/types/full-user';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css'],
})
export class CreateTeamComponent {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  userPool: FullUser[] = [];
  userDisplayNames: string[] = [];

  blankTeam = {
    name: '',
    description: '',
    teammates: [] as FullUser[],
  };

  teamToCreate = this.blankTeam;

  createTeamForm: FormGroup = new FormGroup({
    name: new FormControl<string>(''),
    description: new FormControl<string>(''),
    selectedUser: new FormControl<FullUser | undefined>(undefined),
  });

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCompanyUsers().subscribe((users) => {
      this.userPool = users;
      this.userDisplayNames = this.userPool.map((user) =>
        this.getUserDisplayName(user)
      );
    });
  }

  addTeamMember(userToAdd: FullUser): void {
    this.teamToCreate = {
      ...this.teamToCreate,
      teammates: [...this.teamToCreate.teammates, userToAdd],
    };

    // Remove teammember from selection options
    this.userPool = this.userPool.filter((user) => user.id !== userToAdd.id);
    this.userDisplayNames = this.userDisplayNames.filter(
      (userDisplayName) => userDisplayName != this.getUserDisplayName(userToAdd)
    );
  }

  removeTeamMember(userToRemove: FullUser): void {
    this.teamToCreate = {
      ...this.teamToCreate,
      teammates: this.teamToCreate.teammates.filter(
        (user) => user.id !== userToRemove.id
      ),
    };
    this.userPool = [...this.userPool, userToRemove];
    this.userDisplayNames = [
      ...this.userDisplayNames,
      this.getUserDisplayName(userToRemove),
    ];
  }

  getUserDisplayName(user: FullUser): string {
    return user.profile.firstName + ' ' + user.profile.lastName[0] + '.';
  }

  onClick(selection: string) {
    let userToAdd =
      this.userPool.find(
        (user) => this.getUserDisplayName(user) === selection
      ) ?? defaultFullUser();
    this.addTeamMember(userToAdd);
  }

  onSubmit(): void {
    let newTeam = {
      name: this.createTeamForm.controls['name'].value,
      description: this.createTeamForm.controls['description'].value,
      teammates: this.teamToCreate.teammates.map((user) => user as BasicUser),
    };
    this.dataService.createTeam(newTeam).subscribe((response) => {
      this.dataService.loadTeams();
    });
    this.teamToCreate = this.blankTeam;
    this.close.emit();
  }

  onClose(): void {
    this.close.emit();
  }
}
