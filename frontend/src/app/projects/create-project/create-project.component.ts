import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  createProjectForm: FormGroup = new FormGroup({
    name: new FormControl<string>(''),
    description: new FormControl<string>(''),
  });

  constructor(private dataService: DataService) {}

  onClose(): void {
    this.close.emit();
  }

  onSubmit(): void {
    this.dataService.createProject(
      this.createProjectForm.controls['name'].value,
      this.createProjectForm.controls['description'].value
    );
    this.close.emit();
  }
}
