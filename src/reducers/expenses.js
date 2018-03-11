/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-10 15:05:03 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-10 15:05:43
 */

//**************EXPENSES REDUCER**********************************
const expensesReducerDefaultState = [];

const expenseReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(expense => {
        return expense.id !== action.id;
      });
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

// export default
export default expenseReducer;
