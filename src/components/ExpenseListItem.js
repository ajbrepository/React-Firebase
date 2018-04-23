/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-10 16:31:04 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-04-22 20:04:46
 */

import React from 'react';
// import { connect } from 'react-redux';
// import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => {
  return (
    <Link to={`/edit/${id}`} className="list-item">
      <div>
        <h4 className="list-item__title">{description}</h4>
        <span className="list-item__sub-title">
          {moment(createdAt).format('MMMM Do, YYYY')}
        </span>
      </div>
      <h4 className="list-item__data">
        {numeral(amount / 100).format('$0,0.00')}{' '}
      </h4>
    </Link>
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
