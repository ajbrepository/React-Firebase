/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-10 16:31:04 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-11 18:16:35
 */

import React from 'react';
// import { connect } from 'react-redux';
// import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>

      <p>
        {numeral(amount / 100).format('$0,0.00')} -
        {moment(createdAt).format('MMMM Do, YYYY')}
      </p>
    </div>
  );
};

// <button
// onClick={() => {
//   dispatch(removeExpense({ id: id }));
// }}
// >
// Remove
// </button>
// const ConnectedExpenseListItem = connect()(ExpenseListItem);

//Export default
export default ExpenseListItem;
