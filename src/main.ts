import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { AppComponent } from './app/app.component';
import { tasksReducer } from './app/tasks/state/tasks.reducer';
import { dashboardReducer } from './app/dashboard/state/dashboard.reducer';
import { TasksEffects } from './app/tasks/state/tasks.effects';
import { DashboardEffects } from './app/dashboard/state/dashboard.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { StoreModule } from '@ngrx/store';
bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ tasks: tasksReducer, dashboard: dashboardReducer }),
    provideEffects([TasksEffects, DashboardEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideRouter(routes),
],
}).catch((err) => console.error(err));
