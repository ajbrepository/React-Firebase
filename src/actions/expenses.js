/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-10 15:01:01 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-04-21 18:02:39
 */
import uuid from 'uuid';
import database from './../firebase/firebase';
//**********ACTIONS GENERATORASSOCIATION*************************************

//So far the call list should be like as: Before Firebase and MongoDB
//1.component calls action generator
//2.action generator return object
//3. componnt dispatchs object
//4. redux store change

//So far the call list should be like as: After Async Firebase and MongoDB
//1.component calls action generator
//2.action generator return function
//3. componnt dispatchs function
//4. function runs (has the ability to dispatch other actions and do whatever it wants)

// ADD_EXPENSE
export const addExpense = expense => {
  return {
    type: 'ADD_EXPENSE',
    expense: expense
  };
};

//Firebase Dispath push call + Action generator (Add Expense)
export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    //UID
    const uid = getState().auth.uid;
    //Default values destructuring
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;

    // Add the expense ;object.
    const expense = {
      description,
      note,
      amount,
      createdAt
    };
    //firebase call Push expense to Database - Save to Database
    database
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then(ref => {
        console.log('Data saved to firebase');
        //Save to Redux store
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      })
      .catch(e => {
        console.log('Error while saving data to firebase', e);
      });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => {
  return {
    type: 'REMOVE_EXPENSE',
    id: id
  };
};

//Firebase Dispath push call + Action generator (Remove Expense)
export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    //UID
    const uid = getState().auth.uid;
    //firebase call Push expense to Database - Save to Database
    database
      .ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      })
      .catch(e => {
        console.log('Error while saving data to firebase', e);
      });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => {
  return {
    type: 'EDIT_EXPENSE',
    id: id,
    updates: updates
  };
};

//Firebase Dispath push call + Action generator (EDIT Expense)
export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    //UID
    const uid = getState().auth.uid;
    //firebase call Push expense to Database - Save to Database
    database
      .ref(`users/${uid}/expenses/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      })
      .catch(e => {
        console.log('Error while saving data to firebase', e);
      });
  };
};

//SET_EXPENSES
export const setExpenses = expenses => {
  return {
    type: 'SET_EXPENSES',
    expenses: expenses
  };
};

//Firebase Action Generator + dispatch push call
export const startSetExpenses = () => {
  return (dispatch, getState) => {
    //UID
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses`)
      .once('value')
      .then(snapshot => {
        const expenses = [];
        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setExpenses(expenses));
      });
    // .catch(e => {
    //   console.log('Error Fetching data', e);
    // });
  };
};
