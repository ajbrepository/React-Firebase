/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-09 13:47:42 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-10 12:40:45
 */

import { createStore } from 'redux';

//REDUCERS
//1. Pure Functions - Return depends on the input only. No interaction with outside world.
//2. Never change state or Action - Do not muatate the default state.

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

//REDUX STORE
const store = createStore(countReducer);

//SUBSCRIBE get called everytime the state management change.
const unsubscribe = store.subscribe(() => {
  //GET State
  console.log(store.getState());
});

//ACTION GENERATOR - Return Action object.
const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: 'INCREMENT',
    incrementBy: incrementBy
  };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: 'DECREMENT',
    decrementBy: decrementBy
  };
};

const reset = () => {
  return {
    type: 'RESET'
  };
};

//ACTIONS - Change state. Object sent back to store. Dispatching the Actions to Store
store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(reset());

//UNSUBSCRIBE the state changes.
unsubscribe();
