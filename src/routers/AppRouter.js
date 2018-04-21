/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-09 11:39:18 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-04-21 17:52:18
 */
import React from 'react';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import LoginPage from './../components/LoginPage';
import AddExpensePage from './../components/AddExpensePage';
import EditExpensePage from './../components/EditExpensePage';

import HelpExpensePage from './../components/HelpExpensePage';
import NotFoundPage from './../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import {
  Router,
  BrowserRouter,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

//Create own history like as React Router - BrowserRouter did.

export const history = createHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute exact={true} path="/" component={LoginPage} />
          <PrivateRoute
            exact={true}
            path="/dashboard"
            component={ExpenseDashboardPage}
          />
          <PrivateRoute
            exact={true}
            path="/create"
            component={AddExpensePage}
          />
          <PrivateRoute
            exact={true}
            path="/edit/:id"
            component={EditExpensePage}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};
export default AppRouter;
