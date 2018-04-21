/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-09 11:49:03 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-04-21 17:54:00
 */
import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from './../actions/auth';

const Header = ({ startLogOut }) => {
  return (
    <header>
      <h1 className="header__title">Hallmark Cards INC.</h1>
      <NavLink to="/dashboard" activeClassName="is-active">
        <h3>Dashboard</h3>
      </NavLink>
      <NavLink exact={true} to="/create" activeClassName="is-active">
        <h3>Create Expense</h3>
      </NavLink>
      <button onClick={startLogOut}>Logout</button>
    </header>
  );
};

//MapDispatch to PROPS

const mapDispatchToProps = dispatch => ({
  startLogOut: () => dispatch(startLogout())
});

//Export reduc Connected React component
export default connect(undefined, mapDispatchToProps)(Header);
