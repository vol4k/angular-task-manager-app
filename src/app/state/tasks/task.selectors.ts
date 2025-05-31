import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TasksState, tasksAdapter } from './tasks.state';
import { Task } from '../../models/task.model';

export const selectTaskState = createFeatureSelector<TasksState>('tasks');

export const { selectAll, selectEntities, selectIds, selectTotal } =
  tasksAdapter.getSelectors(selectTaskState);

export const selectCompletedTasks = createSelector(selectAll, (tasks: Task[]) =>
  tasks.filter((task) => task.completed)
);

export const selectPendingTasks = createSelector(selectAll, (tasks: Task[]) =>
  tasks.filter((task) => !task.completed)
);

export const selectTaskById = (taskId: string) =>
  createSelector(selectEntities, (entities) => entities[taskId]);
