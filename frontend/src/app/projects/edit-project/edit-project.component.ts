import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Project } from 'src/app/types/project';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
})
export class EditProjectComponent {
  @Input() project: Project | null = null;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  userIsAdmin: boolean = false;

  editProjectForm: FormGroup = new FormGroup({
    name: new FormControl<string>(''),
    description: new FormControl<string>(''),
    active: new FormControl<boolean>(true),
  });

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    if (!this.project) {
      this.close.emit();
      return;
    }
    this.dataService.currentUser.subscribe((user) => {
      if (!user) {
        this.router.navigateByUrl('/login');
        return;
      }
      this.userIsAdmin = user!.admin;
    });
    this.editProjectForm.controls['name'].setValue(this.project.name);
    this.editProjectForm.controls['description'].setValue(
      this.project.description
    );
    this.editProjectForm.controls['active'].setValue(
      this.project.active ? true : false,
      { onlySelf: true }
    );
  }

  onClose(): void {
    this.close.emit();
  }

  onSubmit(): void {
    let updatedProject: Project = {
      ...this.project!,
      name: this.editProjectForm.controls['name'].value,
      description: this.editProjectForm.controls['description'].value,
      active: this.editProjectForm.controls['active'].value,
    };
    this.dataService.updateProject(updatedProject);
    this.close.emit();
  }
}
