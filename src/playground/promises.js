/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-04-18 22:28:19 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-04-18 22:41:28
 */

//Promise in JS can  be call single time and only with one argument.
// If requires more argument, then pass the JS object.

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is my resolved data');
    // resolve('This is my next resolve');

    reject('This is my reject call');
  }, 2000);
});

promise
  .then(resolve => {
    console.log('First data ' + resolve);
  })
  .catch(reject => {
    console.log(reject);
  });

// promise.then(data => {
//   console.log('Second data' + data);
// });
