import api from 'services/api';
import { Dispatch } from 'redux';
import { Payment, Refund } from 'ts-models';
import { State } from 'reducers';

export enum Actions {
  StartFetch = '[App] Fetch Started',
  FetchFailed = '[App] Fetch Failed',
  UpdateData = '[App] Update Data',
  SetCache = '[Cache] Set Cache',
  UpdateDataFromCache = '[Cache] Update Data From Cache',
}

interface StartAction {
  type: Actions.StartFetch;
}

interface FailAction {
  type: Actions.FetchFailed;
  error: any;
}

interface UpdateAction {
  type: Actions.UpdateData;
  payload: DataPayload;
}

interface SetCacheAction {
  type: Actions.SetCache;
  payload: CachePayload;
}

interface UpdateDataFromCacheAction {
  type: Actions.UpdateDataFromCache;
  payload: DataPayload;
}

export interface DataPayload {
  payments?: Payment[];
  refunds?: Refund[];
}

export interface CachePayload {
  url: string;
  response: Payment[] | Refund[];
  timestamp: number;
}

export type ActionTypes =
  | StartAction
  | FailAction
  | UpdateAction
  | SetCacheAction
  | UpdateDataFromCacheAction;

export const startFetch = (): ActionTypes => ({
  type: Actions.StartFetch,
});

export const updateData = (payload: DataPayload): ActionTypes => ({
  type: Actions.UpdateData,
  payload,
});

export const errorFetch = (error: any): ActionTypes => ({
  type: Actions.FetchFailed,
  error,
});

export const setCache = (payload: CachePayload): ActionTypes => ({
  type: Actions.SetCache,
  payload,
});

export const updateDataFromCache = (payload: DataPayload): ActionTypes => ({
  type: Actions.UpdateDataFromCache,
  payload,
});

/**
 * Cache expiration time in ms. Set to 2 minutes.
 */
const CACHE_EXPIRATION_IN_MS = 120000;

/**
 * Validates whether the cache is valid, checks if the last update was within the cache expiration time.
 * @param timestamp A timestamp of the last cache update.
 */
const isCacheValid = (cache: { timestamp: number }): boolean => {
  return cache && Date.now() - cache.timestamp <= CACHE_EXPIRATION_IN_MS;
};

export const fetchPayments = () => async (
  dispatch: Dispatch<ActionTypes>,
  getState: () => State
) => {
  const url = '/api/payments';
  const cache = getState().api.cache[url];

  if (isCacheValid(cache)) {
    return dispatch(
      updateDataFromCache({ payments: cache.response as Payment[] })
    );
  }

  try {
    dispatch(startFetch());
    const apiResponse = await api.get(url);
    const data = await apiResponse.json();
    dispatch(updateData({ payments: data }));
    dispatch(setCache({ url, response: data, timestamp: Date.now() }));
  } catch (err) {
    dispatch(errorFetch(err));
  }
};

export const fetchPayment = (paymentId: string) => async (
  dispatch: Dispatch<ActionTypes>,
  getState: () => State
) => {
  const url = `/api/payments/${paymentId}`;
  const cache = getState().api.cache[url];

  if (isCacheValid(cache)) {
    return dispatch(
      updateDataFromCache({ payments: [cache.response as Payment] })
    );
  }

  try {
    dispatch(startFetch());
    const apiResponse = await api.get(url);
    const data = await apiResponse.json();
    dispatch(updateData({ payments: [data] }));
    dispatch(setCache({ url, response: data, timestamp: Date.now() }));
  } catch (err) {
    dispatch(errorFetch(err));
  }
};

export const fetchRefunds = (paymentId: string) => async (
  dispatch: Dispatch<ActionTypes>,
  getState: () => State
) => {
  const url = `/api/payments/${paymentId}/refunds`;
  const cache = getState().api.cache[url];

  if (isCacheValid(cache)) {
    return dispatch(
      updateDataFromCache({ refunds: cache.response as Refund[] })
    );
  }

  try {
    dispatch(startFetch());
    const apiResponse = await api.get(url);
    const data = await apiResponse.json();
    dispatch(updateData({ refunds: data }));
    dispatch(setCache({ url, response: data, timestamp: Date.now() }));
  } catch (err) {
    dispatch(errorFetch(err));
  }
};
