import { createAction, props } from '@ngrx/store';
import { Task } from '../../models/task.model';

export const loadTasks = createAction('[Task Page] Load Tasks');

export const loadTasksSuccess = createAction(
  '[Task API] Load Tasks Success',
  props<{ tasks: Task[] }>()
);

export const loadTasksFailure = createAction(
  '[Task API] Load Tasks Failure',
  props<{ error: string }>()
);

export const addTask = createAction(
  '[Task Form] Add task',
  props<{ task: Task }>()
);

export const addTaskSuccess = createAction(
  '[Task API] Add Task Success',
  props<{ task: Task }>()
);

export const addTaskFailure = createAction(
  '[Task API] Add Task Failure',
  props<{ error: string }>()
);

export const toggleTaskComplete = createAction(
  '[Task Item] Toggle Task Complete',
  props<{ taskId: string; completed: boolean }>()
);

export const toggleTaskCompleteSuccess = createAction(
  '[Task API] Toggle Task Complete Success',
  props<{ task: Task }>()
);

export const toggleTaskCompleteFailure = createAction(
  '[Task API] Toggle Task Complete Failure',
  props<{ error: string }>()
);

export const deleteTask = createAction(
  '[Task Item] Delete Task',
  props<{ taskId: string }>()
);

export const deleteTaskSuccess = createAction(
  '[Task API] Delete Task Success',
  props<{ taskId: string }>()
);

export const deleteTaskFailure = createAction(
  '[Task API] Delete Task Failure',
  props<{ error: string }>()
);
