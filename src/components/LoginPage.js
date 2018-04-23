/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-04-21 15:48:08 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-04-22 16:06:32
 */

import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from './../actions/auth';

export const LoginPage = ({ startLogin }) => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1>React with Firebase - Project</h1>
        <p>Google's Mobile Platform </p>
        <button onClick={startLogin} className="btn btn-primary">
          Login with Google
        </button>
      </div>
    </div>
  );
};

//Map
const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

//Connect Component to Redux
export default connect(undefined, mapDispatchToProps)(LoginPage);
