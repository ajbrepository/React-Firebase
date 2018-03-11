/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-10 15:03:25 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-10 15:04:21
 */

// SET_TEXT_FILTER
export const setTextFilter = (text = '') => {
  return {
    type: 'SET_TEXT_FILTER',
    text: text
  };
};

//SORT_BY_AMOUNT
export const sortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT'
  };
};

// SORT_BY_DATE
export const sortByDate = () => {
  return {
    type: 'SORT_BY_DATE'
  };
};

// SET_START_DATE
export const setStartDate = startDate => {
  return {
    type: 'SET_START_DATE',
    startDate: startDate
  };
};

// SET_END_DATE
export const setEndDate = endDate => {
  return {
    type: 'SET_END_DATE',
    endDate: endDate
  };
};
