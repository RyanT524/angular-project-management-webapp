import { Component } from '@angular/core';
import { NameToInitialPipe } from './name-to-initial.pipe';
import { FullUser } from '../types/full-user';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', '../../styles.css'],
})
export class NavbarComponent {
  currentUser: FullUser | null = null;

  isMenuOpen = false;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.currentUser.subscribe((user) => (this.currentUser = user));
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleLogout(): void {
    this.dataService.setCurrentUser(null);
    this.router.navigateByUrl('/');
  }
}
