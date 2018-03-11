/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-01 03:41:29 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-01 04:14:20
 */
const express = require('express');
const path = require('path');
// const env = require('./config/config');

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
  console.log(`ReactApp is running on  ${port} !!! `);
});
