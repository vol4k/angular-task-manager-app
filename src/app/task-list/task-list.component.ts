import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../models/task.model';
import { TaskItemComponent } from '../task-item/task-item.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as TasksSelectors from '../state/tasks/tasks.selectors';
import * as TasksActions from '../state/tasks/tasks.actions';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(private store: Store) {
    this.tasks$ = this.store.select(TasksSelectors.selectAll);
  }

  ngOnInit(): void {
    this.store.dispatch(TasksActions.loadTasks());
  }

  onToggleTaskComplete(event: { taskId: string; completed: boolean }): void {
    console.log(
      'Toggle complete for task ID:',
      event.taskId,
      'New status:',
      event.completed
    );
    this.store.dispatch(
      TasksActions.toggleTaskComplete({
        taskId: event.taskId,
        completed: event.completed,
      })
    );
  }

  onDeleteTask(taskId: string): void {
    console.log('Delete task ID:', taskId);
    this.store.dispatch(TasksActions.deleteTask({ taskId }));
  }
}
