import {
  Actions,
  startFetch,
  updateData,
  errorFetch,
  setCache,
  updateDataFromCache,
} from 'actions';

const mockPayments = [
  {
    id: 'pay_5c3c5964c48f30c128f9e588',
    amount: { currency: 'EUR', value: 69.42 },
    createdAt: '2019-01-09T06:48:50',
    status: 'paid',
    method: 'paypal',
    description: 'Order 100029312891',
    customer: {
      id: 'cus_5d5feb4b6c12d9ce8cb582b3',
      name: 'Douglas Rodriguez',
      company: 'Netur',
      email: 'douglasrodriguez@netur.com',
      picture: {
        large: 'https://randomuser.me/api/portraits/men/1.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/1.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
      },
    },
  },
  {
    id: 'pay_5c3c5964a303b9749cd3efe6',
    amount: { currency: 'EUR', value: 49.64 },
    createdAt: '2019-01-01T03:07:37',
    status: 'canceled',
    method: 'ideal',
    description: 'Order 100029352819',
    customer: {
      id: 'cus_5d5feb4b1f76e1e834f47593',
      name: 'Juliana Mills',
      company: 'Bezal',
      email: 'julianamills@bezal.com',
      picture: {
        large: 'https://randomuser.me/api/portraits/women/2.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/2.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
      },
    },
  },
];

const mockPayload = {
  payments: mockPayments,
};

const mockCachePayload = {
  url: '/api/payments',
  response: mockPayments,
  timestamp: 1589500653507,
};

describe('Actions', () => {
  it('should create an action to start fetch', () => {
    // act and assert
    expect(startFetch()).toEqual({
      type: Actions.StartFetch,
    });
  });

  it('should create an action to update data', () => {
    // act and assert
    expect(updateData(mockPayload)).toEqual({
      type: Actions.UpdateData,
      payload: mockPayload,
    });
  });

  it('should create an action to throw error', () => {
    // arrange
    const error = new Error('Boom');

    // act and assert
    expect(errorFetch(error)).toEqual({
      type: Actions.FetchFailed,
      error,
    });
  });

  it('should create an action to set cache', () => {
    // act and assert
    expect(setCache(mockCachePayload)).toEqual({
      type: Actions.SetCache,
      payload: mockCachePayload,
    });
  });

  it('should create an action to update data from cache', () => {
    // act and assert
    expect(updateDataFromCache(mockPayload)).toEqual({
      type: Actions.UpdateDataFromCache,
      payload: mockPayload,
    });
  });
});
