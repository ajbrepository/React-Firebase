/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-09 11:48:30 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-09 12:02:07
 */

import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      404! Go to -<Link to="/">Home Page</Link>
    </div>
  );
};

export default NotFoundPage;
