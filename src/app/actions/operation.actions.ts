import { Action } from '@ngrx/store';
import { Operation } from '../models/operation.model';

export enum actions {
  LOAD_OPERATIONS = '[OPERATION] LOAD',
  LOAD_OPERATIONS_SUCCESS = '[OPERATION] LOAD SUCCESS',
  LOAD_OPERATIONS_FAILED = '[OPERATION] LOAD FAILED',
}

export class LoadOperations implements Action {
  readonly type = actions.LOAD_OPERATIONS;

  constructor(public payload: number) {}
}

export class LoadOperationsSuccess implements Action {
  readonly type = actions.LOAD_OPERATIONS_SUCCESS;

  constructor(public payload: Operation[]) {}
}

export class LoadOperationsFailed implements Action {
  readonly type = actions.LOAD_OPERATIONS_FAILED;

  constructor(public payload: string) {}
}
export type Actions =
  | LoadOperations
  | LoadOperationsSuccess
  | LoadOperationsFailed;
