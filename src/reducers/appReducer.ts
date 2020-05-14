import { Payment, Refund } from 'ts-models';
import { Actions, CachePayload, DataPayload } from 'actions';

export interface AppState {
  payments: Payment[];
  refunds: Refund[];
  error: any;
}

export interface Action {
  type?: Actions;
  payload?: DataPayload | CachePayload;
  error?: any;
}

const defaultState: AppState = {
  payments: [],
  refunds: [],
  error: null,
};

/**
 * Stores and updates data.
 */
export const appReducer = (
  state = defaultState,
  action: Action = {}
): AppState => {
  const { error, payload } = action;

  switch (action.type) {
    case Actions.FetchFailed: {
      return {
        ...state,
        error,
      };
    }
    case Actions.StartFetch: {
      return state;
    }
    case Actions.UpdateData: {
      return {
        ...state,
        ...payload,
        error: null,
      };
    }
    default:
      return state;
  }
};
