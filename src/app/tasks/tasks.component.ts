import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadTasks } from './state/tasks.actions';
import { Observable } from 'rxjs';
import { selectAllTasks, selectTasksLoading, selectTasksError } from './state/tasks.selectors';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  providers: [Store],
})
export class TasksComponent implements OnInit {
  tasks$: Observable<any[]> = this.store.select(selectAllTasks);
  loading$: Observable<boolean> = this.store.select(selectTasksLoading);
  error$: Observable<string | null> = this.store.select(selectTasksError);

  constructor(private store: Store) {
    console.log('Store injected:', !!store);
  }

  ngOnInit() {
    this.store.dispatch(loadTasks());
  }
}
