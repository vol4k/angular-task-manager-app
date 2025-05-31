import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../models/task.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-task-item',
  imports: [CommonModule, MatIconModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItemComponent {
  @Input({ required: true }) task!: Task;
  @Output() toggleCompleted = new EventEmitter<string>();
  @Output() deleteTask = new EventEmitter<string>();

  onToggleCompleted(): void {
    this.toggleCompleted.emit(this.task.id);
  }

  onDeleteTask(): void {
    this.deleteTask.emit(this.task.id);
  }
}
