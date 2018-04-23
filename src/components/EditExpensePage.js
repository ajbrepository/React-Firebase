/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-09 11:47:24 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-04-22 19:12:16
 */

import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startRemoveExpense } from '../actions/expenses';
import { startEditExpense } from '../actions/expenses';

const EditExpensePage = props => {
  // console.log(props);
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit Record</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm
          expense={props.expense}
          onSubmit={expense => {
            console.log('Updated', expense);
            props.dispatch(startEditExpense(props.match.params.id, expense));
            props.history.push('/');
          }}
        />
        <button
          className="button-red"
          onClick={() => {
            props.dispatch(startRemoveExpense({ id: props.match.params.id }));
            props.history.push('/');
          }}
        >
          Remove Record
        </button>
      </div>
    </div>
  );
};

//Connect to Redux store
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => {
      return expense.id === props.match.params.id;
    })
  };
};
const ConnectedEditExpensePage = connect(mapStateToProps)(EditExpensePage);

export default ConnectedEditExpensePage;
