/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-09 11:44:36 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-11 18:38:39
 */
import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary.js';

const ExpenseDashboardPage = () => {
  return (
    <div>
      <ExpenseSummary />
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  );
};

export default ExpenseDashboardPage;
