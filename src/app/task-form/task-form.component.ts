import {
  ChangeDetectionStrategy,
  Component,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskFormComponent {
  newTaskTitle: string = '';

  @Output() addTask = new EventEmitter<string>();

  onAddTask(): void {
    if (this.newTaskTitle.trim()) {
      this.addTask.emit(this.newTaskTitle.trim());
      this.newTaskTitle = '';
    }
  }
}
