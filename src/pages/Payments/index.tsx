import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import OverviewContainer from 'containers/OverviewContainer';
import DetailContainer from 'containers/DetailContainer';
import { MatchProps } from 'ts-models';

const Payments = ({ match }: MatchProps) => (
  <Switch>
    <Route path={match.path} exact component={OverviewContainer} />
    <Route path={`${match.path}/:id`} exact component={DetailContainer} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Payments;
