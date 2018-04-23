/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-09 11:49:03 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-04-22 17:38:47
 */
import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from './../actions/auth';

const Header = ({ startLogOut }) => {
  return (
    <header className="header">
      <div className="content-container ">
        <div className="header__content">
          <h1>React with Firebase - Project</h1>
          <Link className="button-grey" to="/dashboard">
            Dashboard
          </Link>
          <button className="button-red" onClick={startLogOut}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

//MapDispatch to PROPS

const mapDispatchToProps = dispatch => ({
  startLogOut: () => dispatch(startLogout())
});

//Export reduc Connected React component
export default connect(undefined, mapDispatchToProps)(Header);
