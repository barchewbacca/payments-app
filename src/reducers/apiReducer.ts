import { Actions, CachePayload } from 'actions';
import { Payment, Refund } from 'ts-models';
import { Action } from './appReducer';

export interface ApiState {
  cache: {
    [url: string]: {
      response: Payment[] | Refund[] | Payment;
      timestamp: number;
    };
  };
}

const defaultState: ApiState = {
  cache: {},
};

/**
 * Stores cached API responses.
 */
export const cacheReducer = (
  state = defaultState,
  action: Action = {}
): ApiState => {
  switch (action.type) {
    case Actions.SetCache: {
      const { payload } = action;
      const { url, response, timestamp } = payload as CachePayload;

      return {
        ...state,
        cache: {
          ...state.cache,
          [url]: {
            response,
            timestamp,
          },
        },
      };
    }
    default:
      return state;
  }
};
