/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-04-21 17:26:23 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-04-21 17:51:46
 */

import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={props =>
        isAuthenticated ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

//MapStateToProps
const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

//Export Default
export default connect(mapStateToProps)(PublicRoute);
