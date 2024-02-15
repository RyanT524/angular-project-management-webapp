import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from 'src/app/types/project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent {
  @Input() project!: Project;
  @Output() edit: EventEmitter<Project> = new EventEmitter<Project>();

  handleEditButton(): void {
    this.edit.emit(this.project);
  }
}
