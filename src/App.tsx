import * as React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import NotFound from './pages/NotFound';
import Payments from './pages/Payments';
import store from 'store';
import { ScrollToTop } from 'utils';

const App = () => (
  <Provider store={store}>
    <Router>
      <ScrollToTop />
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
  </Provider>
);

export default App;
