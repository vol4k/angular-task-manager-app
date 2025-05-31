import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../models/task.model';
import { TaskItemComponent } from '../task-item/task-item.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as TaskSelectors from '../state/tasks/task.selectors';
import * as TaskActions from '../state/tasks/task.actions';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent {
  tasks$: Observable<Task[]>;

  constructor(private store: Store) {
    this.tasks$ = this.store.select(TaskSelectors.selectAll);
  }

  ngOnInit(): void {
    this.store.dispatch(TaskActions.loadTasks());
  }

  onToggleTaskComplete(taskId: string): void {
    console.log('Toggle complete for task ID:', taskId);
    this.store.dispatch(TaskActions.toggleTaskComplete({ taskId }));
  }

  onDeleteTask(taskId: string): void {
    console.log('Delete task ID:', taskId);
    this.store.dispatch(TaskActions.deleteTask({ taskId }));
  }
}
