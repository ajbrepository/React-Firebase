/*
 * @Author: Dheeraj Chaudhary
 * @Date: 2018-02-11 22:47:07
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-12 13:31:46
 */

const env = process.env.NODE_ENV || 'development';
// const env = 'prod';
if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/Expensify';
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/ExpensifyTest';
} else {
  console.log('Node Environment', env);
  process.env.MONGODB_URI = 'mongodb://localhost:27017/Expensify';
  console.log('MongoDB Environment Set up', process.env.MONGODB_URI);

  //Production Hardcoded values
  // process.env.PORT = 3000;
  // process.env.MONGODB_URI = 'mongodb://mongoUser:MongoDB2018@ds233228.mlab.com:33228/mongo-crud-db';
}

// Default Export
export default env;
