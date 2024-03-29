import { Component, Input } from '@angular/core';
import Announcement, { defaultAnnouncement } from 'src/app/types/announcement';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css'],
})
export class AnnouncementComponent {
  @Input() announcement: Announcement = defaultAnnouncement()
}
