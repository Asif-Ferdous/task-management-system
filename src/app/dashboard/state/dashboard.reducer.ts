import { createReducer, on } from '@ngrx/store';
import { loadDashboardData, loadDashboardDataSuccess, loadDashboardDataFailure } from './dashboard.actions';

export interface DashboardState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: DashboardState = {
  data: [],
  loading: false,
  error: null,
};

export const dashboardReducer = createReducer(
  initialState,
  on(loadDashboardData, (state) => ({ ...state, loading: true })),
  on(loadDashboardDataSuccess, (state, { data }) => ({ ...state, loading: false, data })),
  on(loadDashboardDataFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
