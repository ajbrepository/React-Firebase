/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-10 15:01:01 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-21 09:48:15
 */
import uuid from 'uuid';
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
export const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => {
  return {
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description: description,
      note: note,
      amount: amount,
      createdAt: createdAt
    }
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => {
  return {
    type: 'REMOVE_EXPENSE',
    id: id
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
