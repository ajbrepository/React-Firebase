/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-10 15:10:40 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-11 19:31:46
 */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses';
import filetrsReducer from '../reducers/filters';
import thunk from 'redux-thunk';

//**************STORE*********************************************
// const store = createStore(
//   combineReducers({
//     expenses: expenseReducer,
//     filters: filetrsReducer
//   })
// );
const composeEhnacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filetrsReducer
    }),
    composeEhnacers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
