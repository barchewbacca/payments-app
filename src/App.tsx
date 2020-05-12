import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import NotFound from './pages/NotFound';
import Payments from './pages/Payments';

const App = () => (
  <Router>
    <div className="app">
      <div className="container">
        <Switch>
          <Redirect exact from="/" to="/payments" />
          <Route path="/payments" component={Payments} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
