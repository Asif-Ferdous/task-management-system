import { createReducer, on } from '@ngrx/store';
import { loadTasks, loadTasksSuccess, loadTasksFailure } from './tasks.actions';

export interface TasksState {
  tasks: any[];
  loading: boolean;
  error: string | null;
}

const initialState: TasksState = {
  tasks: [],
  loading: false,
  error: null,
};

export const tasksReducer = createReducer(
  initialState,
  on(loadTasks, (state) => ({ ...state, loading: true })),
  on(loadTasksSuccess, (state, { tasks }) => ({ ...state, loading: false, tasks })),
  on(loadTasksFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
