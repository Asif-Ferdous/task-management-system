import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadDashboardData } from './state/dashboard.actions';
import { Observable } from 'rxjs';
import { selectDashboardData, selectDashboardLoading, selectDashboardError } from './state/dashboard.selectors';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  providers: [Store],
})
export class DashboardComponent implements OnInit {
  data$: Observable<any[]> = this.store.select(selectDashboardData);
  loading$: Observable<boolean> = this.store.select(selectDashboardLoading);
  error$: Observable<string | null> = this.store.select(selectDashboardError);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadDashboardData());
  }
}
