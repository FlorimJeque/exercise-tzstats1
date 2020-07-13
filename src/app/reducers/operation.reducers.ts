import * as OperationActions from '../actions/operation.actions';
import { Operation } from '../models/operation.model';

export function reducer(state: Operation[], action: OperationActions.Actions) {
  switch (action.type) {
    case OperationActions.actions.LOAD_OPERATIONS: {
      return { ...state, num: action.payload };
    }
    case OperationActions.actions.LOAD_OPERATIONS_SUCCESS: {
      return {
        ...state,
        operations: [...action.payload, state],
        lastElement: action.payload[action.payload.length - 1],
      };
    }
    case OperationActions.actions.LOAD_OPERATIONS_FAILED: {
      return {
        ...state,
        e: action.payload,
      };
    }

    default:
      return state;
  }
}
