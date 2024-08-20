import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
//import { DashboardService } from '../dashboard.service'; // Replace with your actual service
import { loadDashboardData, loadDashboardDataSuccess, loadDashboardDataFailure } from './dashboard.actions';

@Injectable()
export class DashboardEffects {
  loadDashboardData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDashboardData),
    //   mergeMap(() =>
    //     this.dashboardService.getDashboardData().pipe(
    //       map(data => loadDashboardDataSuccess({ data })),
    //       catchError(error => of(loadDashboardDataFailure({ error: error.message }))))
    //   )
    )
  );

  constructor(
    private actions$: Actions,
   // private dashboardService: DashboardService // Replace with your actual service
  ) {}
}
