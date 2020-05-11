/* eslint-disable default-case */
export const getPaymentMethodName = (id: string) => {
  switch (id) {
    case 'ideal':
      return 'iDEAL';
    case 'creditcard':
      return 'Credit card';
    case 'paypal':
      return 'Paypal';
  }
};
