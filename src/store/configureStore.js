/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-10 15:10:40 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-11 16:27:21
 */
import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filetrsReducer from '../reducers/filters';

//**************STORE*********************************************
// const store = createStore(
//   combineReducers({
//     expenses: expenseReducer,
//     filters: filetrsReducer
//   })
// );

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filetrsReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
