import { format } from 'date-fns';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Returns method label for the provided method value.
 * @param id A payment method.
 */
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

/**
 * Returns the currency symbol corresponding to the provided currency code.
 * @param currency A currency that needs to be formatted.
 */
export const getCurrencySymbol = (currency: string): string => {
  switch (currency) {
    case 'EUR':
      return '€';
    case 'USD':
      return '$';
    case 'GBP':
      return '£';
    default:
      return currency;
  }
};

/**
 * Returns prettified timestamp in a format of "d MMM yyyy 'at' hh:mm".
 * @param timestamp A timestamp that needs to be formatted.
 */
export const getFormattedTimestamp = (timestamp: string): string => {
  return format(new Date(timestamp), `d MMM yyyy 'at' hh:mm`);
};

/**
 * Scrolls the window up on every on every route change.
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
