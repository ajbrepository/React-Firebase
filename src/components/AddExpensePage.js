/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-09 11:46:58 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-04-22 19:04:08
 */
import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';

const AddExpensePage = props => {
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add Record</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm
          onSubmit={expense => {
            // console.log(expense);
            props.dispatch(startAddExpense(expense));
            props.history.push('/');
          }}
        />
      </div>
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
