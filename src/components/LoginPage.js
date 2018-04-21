/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-04-21 15:48:08 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-04-21 16:14:09
 */

import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from './../actions/auth';

export const LoginPage = ({ startLogin }) => {
  return (
    <div>
      <button onClick={startLogin}>Login</button>
    </div>
  );
};

//Map
const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

//Connect Component to Redux
export default connect(undefined, mapDispatchToProps)(LoginPage);
