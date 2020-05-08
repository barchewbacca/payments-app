const { send } = require('micro');
const { router, get } = require('microrouter');

// Data layer
const {
  getPayment,
  getCustomer,
  getPayments,
  getPaymentRefunds,
} = require('./datafetcher');

// Routes
const Root = (req, res) =>
  send(res, 404, 'All routes are under the /api namespace.');

const PaymentsOverview = (req, res) => send(res, 200, getPayments());

const PaymentDetails = (req, res) => {
  const payment = getPayment(req.params.id);

  if (!payment) {
    return send(res, 404, 'Could not find payment.');
  }

  return send(res, 200, payment);
};

const CustomerDetails = (req, res) => {
  const customer = getCustomer(req.params.id);

  if (!customer) {
    return send(res, 404, 'Could not find customer.');
  }

  return send(res, 200, customer);
};

const PaymentRefunds = (req, res) => {
  const payment = getPayment(req.params.id);

  if (!payment) {
    return send(res, 404, 'Could not find payment');
  }

  const refunds = getPaymentRefunds(req.params.id);
  return send(res, 200, refunds);
};

const NotFound = (req, res) =>
  send(res, 404, 'Whoops. Not sure what you are looking for.');

module.exports = router(
  get('/', Root),
  get('/api/payments(/)', PaymentsOverview),
  get('/api/payments/:id/refunds(/)', PaymentRefunds),
  get('/api/payments/:id(/)', PaymentDetails),
  get('/api/customers/:id(/)', CustomerDetails),
  get('/*', NotFound)
);
