/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-10 16:05:32 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-11 18:54:02
 */

import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import totalExpense from '../selectors/expenses-total';
import expensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';

const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpenseTotal = numeral(expenseTotal / 100).format('$0,0.00');

  return (
    <div>
      <h1>
        Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal}
      </h1>
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
