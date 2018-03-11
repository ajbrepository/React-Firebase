/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-09 11:39:18 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-09 13:18:04
 */
import React from 'react';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import AddExpensePage from './../components/AddExpensePage';
import EditExpensePage from './../components/EditExpensePage';
import Header from './../components/Header';
import HelpExpensePage from './../components/HelpExpensePage';
import NotFoundPage from './../components/NotFoundPage';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Route component={Header} />
        <Switch>
          <Route exact={true} path="/" component={ExpenseDashboardPage} />
          <Route exact={true} path="/create" component={AddExpensePage} />
          <Route exact={true} path="/edit/:id" component={EditExpensePage} />
          <Route exact={true} path="/help" component={HelpExpensePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default AppRouter;
