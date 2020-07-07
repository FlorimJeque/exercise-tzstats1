import * as OperationActions from '../actions/operation.actions';
import { Operation } from '../models/operation.model';

export function reducer(state: Operation[], action: OperationActions.Actions) {
  switch (action.type) {
    case OperationActions.actions.LOAD_OPERATIONS: {
      return { ...state };
    }
    case OperationActions.actions.LOAD_OPERATIONS_SUCCESS: {
      return {
        ...state,
        ops: action.payload,
      };
    }
    case OperationActions.actions.LOAD_OPERATIONS_FAILED: {
      return {
        ...state,
        e: action.payload,
      };
    }
  }
}
