const { omit } = require('lodash');

// Data
const customersData = require('./data/customers.js');
const paymentsData = require('./data/payments.js');
const refundsData = require('./data/refunds.js');

module.exports = {
  getPayment(paymentId) {
    const paymentIndex = paymentsData.findIndex(({ id }) => id === paymentId);
    const payment = paymentsData[paymentIndex];

    return {
      ...payment,
      customer: customersData[paymentIndex],
    };
  },
  getCustomer(customerId) {
    return customersData.find(({ id }) => id === customerId);
  },
  getPayments() {
    return paymentsData.map((payment, index) => ({
      ...payment,
      customer: customersData[index],
    }));
  },
  getPaymentRefunds(paymentId) {
    const refunds = refundsData.filter(
      ({ paymentId: belongsToPaymentId }) => paymentId === belongsToPaymentId
    );

    // We're only using this data internally (to map refunds to payments). No need to expose this, as it's already in the route.
    return refunds.map(refund => omit(refund, ['paymentId']));
  },
};
