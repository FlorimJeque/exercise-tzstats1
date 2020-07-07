import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { catchError, mergeMap, map } from 'rxjs/operators';

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
    mergeMap((actions: operationActions.LoadOperations) =>
      this.api.loadOperations().pipe(
        map((operations: Operation[], index) => {
          const ops = operations.map((value) => {
            console.log(value);
            return {
              row_id: value['0'],
              time: value['1'],
              type: value['2'],
              sender: value['3'],
              volume: value['4'],
            };
          });
          return new operationActions.LoadOperationsSuccess(ops);
        }),
        catchError((errr) =>
          of(new operationActions.LoadOperationsFailed(errr))
        )
      )
    )
  );
}
