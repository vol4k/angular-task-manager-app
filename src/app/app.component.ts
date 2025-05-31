import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task } from './models/task.model';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-task-manager-app';

  dummyTasks: Task[] = [
    { id: '1', title: 'Learn Angular basics', completed: false },
    { id: '2', title: 'Setup NgRx', completed: true },
    { id: '3', title: 'Style with SCSS and Flexbox', completed: false },
  ];
}
