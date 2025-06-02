import { createReducer, on } from '@ngrx/store';
import { initialTasksState, tasksAdapter } from './tasks.state';
import * as TaskActions from './tasks.actions';

export const tasksReducer = createReducer(
  initialTasksState,

  on(TaskActions.loadTasksSuccess, (state, { tasks }) => {
    return tasksAdapter.setAll(tasks, state);
  }),

  on(TaskActions.addTaskSuccess, (state, { task }) => {
    return tasksAdapter.addOne(task, state);
  }),

  on(TaskActions.toggleTaskCompleteSuccess, (state, { task }) => {
    return tasksAdapter.updateOne(
      { id: task.id, changes: { completed: task.completed } },
      state
    );
  }),

  on(TaskActions.deleteTaskSuccess, (state, { taskId }) => {
    return tasksAdapter.removeOne(taskId, state);
  })
);
