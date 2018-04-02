/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-09 14:37:57 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-14 16:27:22
 */

//OBJECT Destructuring
// const Person = {
//   name: 'Dheeraj Chaudhary',
//   age: 26,
//   location: {
//     city: 'kansas',
//     temp: 72
//   }
// };

// const addition = ({ name: firstName = 'dc' } = {}) => {
//   console.log(firstName);
// };

// addition(Person);

// const { name: firstName = 'dc', age } = {};

// const { city, temp: temperature } = Person.location;

// console.log(firstName);

//ARRAY Destructuring
// const address = ['7600 lucille', , 'Shawnee', '66214'];
// const [street, city = 'kansas city', , zip] = address;
// console.log(`${city}`);

const _ = require('underscore');

// const abc = {
//   name: 'chandan'
// };
// const def = {
//   name: 'dheeraj'
// };

// const mergeModal = {
//   ...abc,
//   ...def
// };

// console.log(mergeModal);

myConfig = { name: 'bob' };

yourConfig = { age: 26 };

const mergeModel = _.extend(myConfig, yourConfig);
console.log(mergeModel);
