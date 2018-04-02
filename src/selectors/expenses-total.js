/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-11 18:22:30 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-11 18:41:28
 */

const totalExpense = expenses => {
  if (expenses.length === 0) {
    return 0;
  } else {
    return expenses
      .map(expense => {
        return expense.amount;
      })
      .reduce((sum, value) => {
        return sum + value;
      }, 0);
  }
};

//Export default.

export default totalExpense;
