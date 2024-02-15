import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { FullUser } from '../types/full-user';

interface NewUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  admin?: boolean | undefined;
}

interface EditUser {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  admin: boolean;
  userId?: number | undefined;
}

interface deleteUser {
  userToDelete: string;
  userId?: number | undefined;
}

@Component({
  selector: 'app-user-registry',
  templateUrl: './user-registry.component.html',
  styleUrls: ['./user-registry.component.css'],
})
export class UserRegistryComponent implements OnInit {
  makeAdminBools: string[] = ['true', 'false'];
  userData: FullUser[] = [];
  firstNameExist: boolean = true;
  lastNameExist: boolean = true;
  emailExist: boolean = true;
  passwordsMatch: boolean = true;
  passwordExist: boolean = true;
  adminExist: boolean = true;
  addOverlayVisible: boolean = false;
  editOverlayVisible: boolean = false;
  deleteOverlayVisible: boolean = false;

  // create a new user
  newUser: NewUser = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    admin: undefined,
  };

  // editting user
  editUser: EditUser = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    admin: false,
    userId: -1,
  };

  // deleting user
  deleteUser: deleteUser = {
    userToDelete: '',
    userId: -1,
  };

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    // CHANGE THIS TO THE USER COMPANY
    this.dataService.currentUser.subscribe((user) => {
      // Check for logged-in user
      if (!user) {
        this.router.navigateByUrl('/login');
        return;
      }
      // Disallow non-admin access
      if (!user.admin) {
        this.router.navigateByUrl('/announcements');
      }
      this.dataService.getCompanyUsers().subscribe((userData) => {
        this.userData = userData;
        console.log('THIS IS TEH DATA');
        console.log(this.userData);
      });
    });
  }

  // addUser overlay visibility
  openAddUserOverlay() {
    this.addOverlayVisible = true;
    console.log(this.userData);
  }
  closeAddUserOverlay(): void {
    this.resetNewUser();
    this.addOverlayVisible = false;
  }

  // add user to database/update table
  submitUser(): void {
    this.resetBools();
    if (this.newUser.firstName === '') {
      this.firstNameExist = false;
    } else if (this.newUser.lastName === '') {
      this.lastNameExist = false;
    } else if (this.newUser.email === '') {
      this.emailExist = false;
    } else if (this.newUser.password !== this.newUser.confirmPassword) {
      this.passwordsMatch = false;
    } else if (this.newUser.password === '') {
      this.passwordExist = false;
    } else if (this.newUser.admin === undefined) {
      this.adminExist = false;
    } else {
      this.dataService
        .createUser(
          this.newUser.firstName,
          this.newUser.lastName,
          this.newUser.email,
          this.newUser.password,
          this.newUser.admin
        )
        .subscribe(
          (user) => {
            this.userData.push(user);
            this.closeAddUserOverlay();
          },
          (error) => {
            console.log('CREATE USER FAILED!!!');
          }
        );
    }
  }

  // editUser overlay visibility
  openEditUserOverlay(user: FullUser) {
    this.editUser.firstName = user.profile.firstName;
    this.editUser.lastName = user.profile.lastName;
    this.editUser.email = user.profile.email;
    this.editUser.phoneNumber = user.profile.phone;
    this.editUser.admin = user.admin;
    this.editUser.userId = user.id;

    this.editOverlayVisible = true;
  }
  closeEditUserOverlay(): void {
    this.editOverlayVisible = false;
  }

  // edits user
  editUserApply() {
    this.dataService
      .editUser(
        this.editUser.userId ?? 0,
        this.editUser.firstName,
        this.editUser.lastName,
        this.editUser.email,
        this.editUser.phoneNumber,
        this.editUser.admin
      )
      .subscribe(
        (user) => {
          console.log('NEW USER DATA ', user);
          const index = this.userData.findIndex((u) => u.id === user.id);
          if (index !== -1) {
            this.userData[index] = user;
          }
          this.closeEditUserOverlay();
        },
        (error) => {
          console.log('DID NOT EDIT USER');
        }
      );
  }

  // deleteUser overlay visibility
  openDeleteUserOverlay(user: FullUser) {
    this.deleteUser.userToDelete =
      user.profile.firstName + ' ' + user.profile.lastName;
    this.deleteUser.userId = user.id;

    this.deleteOverlayVisible = true;
  }

  closeDeleteUserOverlay(): void {
    this.deleteOverlayVisible = false;
  }

  // deletes user
  deleteUserApply(): void {
    this.dataService.deleteUser(this.deleteUser.userId ?? 0).subscribe(
      () => {
        console.log('USER DELETED');
        const index = this.userData.findIndex(
          (u) => u.id === this.deleteUser.userId
        );
        if (index !== -1) {
          this.userData.splice(index, 1);
        }
        this.closeDeleteUserOverlay();
      },
      (error) => {
        console.log('DID NOT DELETE USER');
      }
    );
  }

  // dropdown text dissapears
  selectedOption: boolean | null = null;
  onSelectFocus() {
    this.selectedOption = true;
  }

  resetBools(): void {
    this.firstNameExist = true;
    this.lastNameExist = true;
    this.emailExist = true;
    this.passwordsMatch = true;
    this.passwordExist = true;
    this.adminExist = true;
  }

  resetNewUser(): void {
    this.newUser.firstName = '';
    this.newUser.lastName = '';
    this.newUser.email = '';
    this.newUser.password = '';
    this.newUser.confirmPassword = '';
    this.newUser.admin = undefined;
  }
}
