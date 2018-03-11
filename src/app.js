/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-02-27 22:57:33 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-11 17:20:45
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

//STORE
const store = configureStore();

//Actions Dispatch
store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gass bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 14500 }));
// store.dispatch(setTextFilter('water'));

//Selector
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

//Waterfall the Store to all the Components of the application using Provider
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

//Rendering
console.log(store.getState());
ReactDOM.render(jsx, document.getElementById('app'));
