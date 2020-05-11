import * as React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';

import NotFound from 'pages/NotFound';
import Detail from './PaymentDetail';
import Overview from './PaymentsOverview';

interface MatchParams {
  name: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {}

const Payments = ({ match }: MatchProps) => (
  <Switch>
    <Route path={match.path} exact component={Overview} />
    <Route path={`${match.path}/:id`} exact component={Detail} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Payments;
