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
  @Output() toggleComplete = new EventEmitter<{
    taskId: string;
    completed: boolean;
  }>();
  @Output() deleteTask = new EventEmitter<string>();

  onToggleComplete(): void {
    this.toggleComplete.emit({
      taskId: this.task.id,
      completed: !this.task.completed,
    });
  }

  onDeleteTask(): void {
    this.deleteTask.emit(this.task.id);
  }
}
