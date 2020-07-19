import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

import * as operationActions from './actions/operation.actions';

import { AppState } from './app.state';
import { Operation } from './models/operation.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(CdkVirtualScrollViewport) viewPort: CdkVirtualScrollViewport;
  title = 'exercisetzstats';

  operations: any;
  lastID = 18990092;
  itemSizeCount = 10;
  constructor(private store: Store<AppState>) {
    this.store.dispatch(new operationActions.LoadOperations(this.lastID));
    this.store.subscribe((state) => {
      this.operations = state.operations;
    });
  }

  indexChanged(evt, element?) {
    this.lastID = element.row_id;
    if (evt + this.itemSizeCount === this.operations.operations.length + 2) {
      this.store.dispatch(new operationActions.LoadOperations(this.lastID));
    }
  }
}
