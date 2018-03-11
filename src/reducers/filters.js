/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-10 15:06:03 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-11 16:34:57
 */

import moment from 'moment';

//**************FILTERS REDUCER**********************************
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date', // Date or Amount
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

const filetrsReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

//Export default
export default filetrsReducer;
