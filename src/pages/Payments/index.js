import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from 'pages/NotFound';
import Detail from './PaymentDetail';
import Overview from './PaymentsOverview';

const Payments = ({ match }) => (
  <Switch>
    <Route path={match.path} exact component={Overview} />
    <Route path={`${match.path}/:id`} exact component={Detail} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Payments;
