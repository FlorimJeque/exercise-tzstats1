import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { catchError, mergeMap, map, throttleTime } from 'rxjs/operators';

import * as operationActions from '../actions/operation.actions';

import { ApiService } from '../services/api.service';
import { Operation } from '../models/operation.model';

@Injectable({ providedIn: 'root' })
export class OperationEffects {
  constructor(private api: ApiService, private actions$: Actions) {}

  @Effect()
  loadOperations$: Observable<Action> = this.actions$.pipe(
    ofType<operationActions.LoadOperations>(
      operationActions.actions.LOAD_OPERATIONS
    ),
    mergeMap((action: operationActions.LoadOperations) =>
      this.api.loadOperations(action.payload).pipe(
        throttleTime(1000),
        map((operations: Operation[]) => {
          return new operationActions.LoadOperationsSuccess(
            operations.map((value) => ({
              row_id: value['0'],
              time: value['1'],
              type: value['2'],
              sender: value['3'],
              volume: value['4'],
            }))
          );
        }),
        catchError((err) => of(new operationActions.LoadOperationsFailed(err)))
      )
    )
  );
}
