/*
 * @Author: Dheeraj Chaudhary
 * @Date: 2018-02-11 14:14:11
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-21 09:44:54
 */

// import mongoose from 'mongoose';
const mongoose = require('mongoose');

// console.log(process.env.MONGODB_URI);

// const demoState = {
//   expenses: [
//     {
//       id: 'dc',
//       description: 'March rent',
//       note: 'Payment from credit card',
//       amount: 4500,
//       createdAt: 0
//     }
//   ],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount', // Date or Amount
//     startDate: undefined,
//     endDate: undefined
//   }
// };

// MODEL TODOS
const Todo = mongoose.model('ExpensesModal', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

//Export default
export default ExpensesModal;
