/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-01 03:41:29 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-21 09:45:09
 */
const express = require('express');
const path = require('path');
const chalk = require('chalk');
const env = require('./config/config');
const { mongoose } = require('./db/mongoose');

//App to bind with public
const app = express();
const publicPath = path.join(__dirname, '..', 'public');

//Middleware binding to express
app.use(express.static(publicPath));

//Router
app.get('*', (req, res) => {
  res.sendfile(path.join(publicPath, 'index.html'));
});

//APP server listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(chalk.blue(`ReactApp is running on  ${port} !!! `));
});

// TODO
// const newTodo = new Todo({
//   text: 'Redxu procedure'
// });

// newTodo.save().then(
//   response => {
//     console.log(response);
//   },
//   error => {
//     console.log(error);
//   }
// );
