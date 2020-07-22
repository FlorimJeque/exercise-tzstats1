import * as OperationActions from '../actions/operation.actions';
import { AppState } from '../app.state';

export const initialState: AppState = {
  operations: [],
};
export function reducer(
  state = initialState,
  action: OperationActions.Actions
) {
  switch (action.type) {
    case OperationActions.actions.LOAD_OPERATIONS: {
      return { ...state, num: action.payload };
    }
    case OperationActions.actions.LOAD_OPERATIONS_SUCCESS: {
      return {
        ...state,
        operations: [...state.operations, ...action.payload],
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
