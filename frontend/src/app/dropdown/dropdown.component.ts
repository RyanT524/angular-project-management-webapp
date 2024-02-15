import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  @Input() options: string[] | undefined = undefined;
  @Input() button: string = '';
  @Input() isMultipleChoice: boolean = false;
  @Output() passSelection = new EventEmitter<string>();

  isMenuOpen: boolean = false;
  selection: string = '';

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  isButton(): boolean {
    return this.button != '';
  }

  isSelection(): boolean {
    return this.selection != '';
  }

  onClick(selection: string) {
    this.selection = selection;
    this.toggleMenu();
    if (!this.isButton()) this.emitSelection();
  }

  emitSelection() {
    this.passSelection.emit(this.selection);
  }
}
