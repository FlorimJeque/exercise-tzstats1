import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

import * as operationActions from './actions/operation.actions';

import { AppState } from './app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(CdkVirtualScrollViewport) viewPort: CdkVirtualScrollViewport;
  title = 'exercisetzstats';

  operations: any;
  lastElement: any;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new operationActions.LoadOperations(18990092));
    this.store.subscribe((state) => (this.operations = state.operations));
  }

  indexChanged(evt) {
    if (evt == 14) {
      /* this.store.dispatch(
        new operationActions.LoadOperations(this.operations.lastElement.row_id)
      );
      this.store.subscribe((state) => {
        this.operations = state.operations;
        this.lastElement = state.operations[state.operations.length - 1];
      }); */
    }
  }
}
