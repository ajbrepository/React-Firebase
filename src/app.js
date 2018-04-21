/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-02-27 22:57:33 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-04-21 17:10:01
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import env from '../server/config/config';
//DB Connect Required
import { firebase } from './firebase/firebase';
// import mongoose from '../server/db/mongoose';
// import ExpensesModal from '../server/modals/ExpensesModal';

// const newExpense = new ExpensesModal({
//   text: 'React Application'
// });
// newExpense.save();

//STORE
const store = configureStore();

// Default Actions Dispatch
// store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
// store.dispatch(addExpense({ description: 'Gass bill', createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 14500 }));
// store.dispatch(setTextFilter('water'));

//Waterfall the Store to all the Components of the application using Provider
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

//Rendering
let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

//Authentication
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('Logged in');
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(arg => {
      renderApp();
    });

    //Redirect to dashboard
    if (history.location.pathname === '/') {
      history.push('/dashboard');
    }
  } else {
    console.log('Logged Out');
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
