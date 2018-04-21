/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-09 11:46:58 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-04-19 15:27:32
 */
import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';

const AddExpensePage = props => {
  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={expense => {
          // console.log(expense);
          props.dispatch(startAddExpense(expense));
          props.history.push('/');
        }}
      />
    </div>
  );
};

////High Order Component - Connect to store
// const mapStateToProps = state => {
//   return {
//     expenses: selectExpenses(state.expenses, state.filters)
//   };
// };

const ConnectedAddExpensePage = connect()(AddExpensePage);

export default ConnectedAddExpensePage;
