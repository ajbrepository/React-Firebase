/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-10 15:10:40 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-04-21 17:08:25
 */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filetrsReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

//**************STORE*********************************************
// const store = createStore(
//   combineReducers({
//     expenses: expenseReducer,
//     filters: filetrsReducer
//   })
// );

//Compose enhancer is used to apply middleware as well as Redux tool on Redux store.
const composeEhnacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filetrsReducer,
      auth: authReducer
    }),
    composeEhnacers(applyMiddleware(thunk))
    // if we are not using Redux dev tools - than simply add  - applyMiddleware(thunk)
    //applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
