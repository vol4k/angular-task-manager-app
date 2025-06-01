import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { Store } from '@ngrx/store';
import * as TaskActions from './state/tasks/task.actions';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TaskListComponent, TaskFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-task-manager-app';

  constructor(private store: Store) {}

  onAddTask(title: string): void {
    const tempTask = {
      id: Math.random().toString(36).substring(2, 15),
      title,
      completed: false,
    };

    this.store.dispatch(TaskActions.addTask({ task: tempTask }));
  }
}
