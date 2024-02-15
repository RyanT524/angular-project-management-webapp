import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../styles.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  showLoginError = false;

  constructor(private router: Router, private dataService: DataService) {}

  // admin
  //   user: thisismycompany
  //   pass: getyourowncompany
  // non admin
  //   user: pinky
  //   pass: futureceoofwaystar
  checkLogin(): void {
    this.dataService.login(this.username, this.password).subscribe(
      (user) => {
        this.dataService.setCurrentUser(user);
        if (user.admin) {
          this.router.navigateByUrl('/select-company');
        } else {
          this.dataService.updateCompanyId(user.companies[0].id);
          this.router.navigateByUrl('/announcements');
        }
      },
      (error) => {
        this.showLoginError = true;
      }
    );
  }
}
