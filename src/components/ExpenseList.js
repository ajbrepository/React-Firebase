/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-10 16:05:32 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-04-22 20:45:28
 */

import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';
import ExpenseSummary from './ExpenseSummary.js';

const ExpenseList = props => {
  return (
    <div className="content-container">
      <h1 className="record-list">Record List</h1>
      <div className="list-header">
        <div className="show-for-mobile">Records</div>
        <div className="show-for-desktop">Record</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      <div className="list-body">
        {props.expenses.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No Records Found</span>
          </div>
        ) : (
          props.expenses.map(expense => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
        )}
      </div>
    </div>
  );
};

////High Order Component - Connect to store
const mapStateToProps = state => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

//Export Default
export default ConnectedExpenseList;
