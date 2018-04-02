/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-10 16:05:32 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-11 18:40:57
 */

import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

const ExpenseList = props => {
  return (
    <div>
      <h1>Expense List</h1>
      {props.expenses.map(expense => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })}
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
