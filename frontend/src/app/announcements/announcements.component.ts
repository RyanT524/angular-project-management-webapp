import { Component } from '@angular/core';
import Announcement from '../types/announcement';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css'],
})
export class AnnouncementsComponent {
  userIsAdmin: boolean = false;
  announcements: Announcement[] = [];
  isCreateShown: boolean = false;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.loadAnnouncements();

    // Check for logged in currentUser
    this.dataService.currentUser.subscribe((user) => {
      if (!user) {
        this.router.navigateByUrl('/login');
        return;
      }
      // Check if logged-in user is admin
      this.userIsAdmin = user.admin;
    });
  }

  toggleCreate() {
    this.isCreateShown = !this.isCreateShown;
  }

  closeCreate() {
    this.isCreateShown = false;
  }

  loadAnnouncements() {
    this.dataService.getAnnouncements().subscribe((announcements) => {
      this.announcements = announcements
        .map((announcement) => ({
          ...announcement,
          date: new Date(announcement.date),
        }))
        .sort((a, b) => b.date.getTime() - a.date.getTime());
    });
  }
}
