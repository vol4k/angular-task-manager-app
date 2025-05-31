import { Task } from '../../models/task.model';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

export interface TasksState extends EntityState<Task> {}

export const tasksAdapter = createEntityAdapter<Task>({
  selectId: (task: Task) => task.id,
  sortComparer: false,
});

export const initialTasksState: TasksState = tasksAdapter.getInitialState({});
