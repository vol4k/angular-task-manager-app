import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, concatMap } from 'rxjs/operators';

import * as TasksActions from './tasks.actions';
import { TasksService } from '../../services/tasks.service';
import { Action } from '@ngrx/store';

@Injectable()
export class TasksEffects {
  readonly loadTasks$: Observable<Action>;
  readonly addTask$: Observable<Action>;
  readonly toggleTaskComplete$: Observable<Action>;
  readonly deleteTask$: Observable<Action>;

  constructor(private actions$: Actions, private tasksService: TasksService) {
    this.loadTasks$ = createEffect(() =>
      this.actions$.pipe(
        ofType(TasksActions.loadTasks),
        concatMap(() =>
          this.tasksService.getTasks().pipe(
            map((tasks) => TasksActions.loadTasksSuccess({ tasks })),
            catchError((error) => {
              console.error('Error loading tasks:', error);
              return of(
                TasksActions.loadTasksFailure({ error: error.message })
              );
            })
          )
        )
      )
    );

    this.addTask$ = createEffect(() =>
      this.actions$.pipe(
        ofType(TasksActions.addTask),
        concatMap(({ task }) =>
          this.tasksService.addTask(task).pipe(
            map((newTask) => TasksActions.addTaskSuccess({ task: newTask })),
            catchError((error) => {
              console.error('Error adding task:', error);
              return of(TasksActions.addTaskFailure({ error: error.message }));
            })
          )
        )
      )
    );

    this.toggleTaskComplete$ = createEffect(() =>
      this.actions$.pipe(
        ofType(TasksActions.toggleTaskComplete),
        concatMap(({ taskId, completed }) =>
          this.tasksService.updateTask(taskId, { completed }).pipe(
            map((updatedTask) =>
              TasksActions.toggleTaskCompleteSuccess({ task: updatedTask })
            ),
            catchError((error) => {
              console.error('Error toggling task complete status:', error);
              return of(
                TasksActions.toggleTaskCompleteFailure({ error: error.message })
              );
            })
          )
        )
      )
    );

    this.deleteTask$ = createEffect(() =>
      this.actions$.pipe(
        ofType(TasksActions.deleteTask),
        concatMap(({ taskId }) =>
          this.tasksService.deleteTask(taskId).pipe(
            map(() => TasksActions.deleteTaskSuccess({ taskId })),
            catchError((error) => {
              console.error('Error deleting task:', error);
              return of(
                TasksActions.deleteTaskFailure({ error: error.message })
              );
            })
          )
        )
      )
    );
  }
}
