/* eslint-disable default-case */
export const getPaymentMethodName = id => {
  switch (id) {
    case 'ideal':
      return 'iDEAL';
    case 'creditcard':
      return 'Credit card';
    case 'paypal':
      return 'Paypal';
  }
};
