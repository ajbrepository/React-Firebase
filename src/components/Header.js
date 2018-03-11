/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-09 11:49:03 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-09 13:24:36
 */
import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Hallmark Cards INC.</h1>
      <NavLink exact={true} to="/" activeClassName="is-active">
        Dashboard
      </NavLink>
      <NavLink exact={true} to="/create" activeClassName="is-active">
        Create Expense
      </NavLink>
      <NavLink exact={true} to="/help" activeClassName="is-active">
        Help
      </NavLink>
    </header>
  );
};

export default Header;
