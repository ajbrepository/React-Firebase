/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-10 15:27:33 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-10 15:46:13
 */

//Higher Order Component (HOC)
// A. A component that render another component.
// B. Render hijacking
// C. Reuse code
// D. Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => {
  return (
    <div>
      <h1>hello there </h1>
      <h2>{props.info}</h2>
      <h2>{props.isAdmin}</h2>
    </div>
  );
};

const withAdminWarning = WrappedComponent => {
  return props => {
    return (
      <div>
        <p>This is private info !!</p>
        {props.isAdmin}
        <WrappedComponent {...props} />
      </div>
    );
  };
};
const AdminInfo = withAdminWarning(Info);

//Renderin
ReactDOM.render(
  <AdminInfo isAdmin="true" info="these are the details" />,
  document.getElementById('app')
);
