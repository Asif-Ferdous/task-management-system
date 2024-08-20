import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
//import { TaskService } from '../task.service'; // Replace with your actual service
import { loadTasks, loadTasksSuccess, loadTasksFailure } from './tasks.actions';

@Injectable()
export class TasksEffects {
  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTasks),
    //   mergeMap(() =>
    //     this.taskService.getTasks().pipe(
    //       map(tasks => loadTasksSuccess({ tasks })),
    //       catchError(error => of(loadTasksFailure({ error: error.message }))))
    //   )
    )
  );

  constructor(
    private actions$: Actions,
    //private taskService: TaskService // Replace with your actual service
  ) {}
}
