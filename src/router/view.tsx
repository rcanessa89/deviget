import { FunctionComponent } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

  import { HomeView } from 'modules/home';
  import { ROUTER_PATHS } from './constants';
  
const AppRouter: FunctionComponent = () => (
  <Router>
    <Switch>
        <Route path={ROUTER_PATHS.home}>
            <HomeView></HomeView>
        </Route>
    </Switch>
  </Router>
);

export default AppRouter;
