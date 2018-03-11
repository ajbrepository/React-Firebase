/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-10 16:31:04 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-10 23:13:40
 */

import React from 'react';
// import { connect } from 'react-redux';
// import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>

      <p>
        {amount} - {createdAt}
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
