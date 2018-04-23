/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-10 16:05:32 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-04-22 20:45:54
 */

import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import totalExpense from '../selectors/expenses-total';
import expensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';
import { Link } from 'react-router-dom';

const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount === 1 ? 'Record' : 'Records';
  const formattedExpenseTotal = numeral(expenseTotal / 100).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <div className="page-header__actions">
          <Link className="button-teal" exact={true} to="/create">
            Create Record
          </Link>
          <Link className="button-yellow" exact={true} to="/help">
            Contact Us
          </Link>
          <Link className="button-green" exact={true} to="/help">
            Help.....
          </Link>
        </div>
        <h1 className="page-header__title">
          {expenseWord} -
          <span>{expenseCount} </span>
          Total - <span>{formattedExpenseTotal}</span>
        </h1>
      </div>
    </div>
  );
};

////High Order Component - Connect to store
const mapStateToProps = state => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: totalExpense(visibleExpenses)
    //   expenseTotal: totalExpense(state.expenses)
  };
};

const ConnectedExpenseSummary = connect(mapStateToProps)(ExpenseSummary);

//Export Default
export default ConnectedExpenseSummary;
