import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../models/task.model';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent {
  @Input() tasks: Task[] | null = [];

  // TODO onToggleTaskComplete implementation
  onToggleTaskComplete(taskId: string): void {
    console.log('Toggle complete for task ID:', taskId);
  }

  // TODO onDeleteTask implementation
  onDeleteTask(taskId: string): void {
    console.log('Delete task ID:', taskId);
  }
}
