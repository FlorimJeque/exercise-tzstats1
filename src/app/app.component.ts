import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as operationActions from './actions/operation.actions';
import { AppState } from './app.state';
import { Observable } from 'rxjs';
import { Operation } from './models/operation.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'exercisetzstats';

  operations;

  constructor(private store: Store<AppState>) {
    this.store.dispatch({
      type: operationActions.actions.LOAD_OPERATIONS,
    });

    this.store.dispatch({ type: operationActions.actions.LOAD_OPERATIONS });

    this.store.subscribe((state) => (this.operations = state.operations));
  }
}
