/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-10 15:01:01 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-10 15:09:58
 */
import uuid from 'uuid';
//**********ACTIONS GENERATORASSOCIATION*************************************

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
