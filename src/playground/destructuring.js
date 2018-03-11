/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-09 14:37:57 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-10 12:30:18
 */

//OBJECT Destructuring
const Person = {
  name: 'Dheeraj Chaudhary',
  age: 26,
  location: {
    city: 'kansas',
    temp: 72
  }
};

// const addition = ({ name: firstName = 'dc' } = {}) => {
//   console.log(firstName);
// };

// addition(Person);

const { name: firstName = 'dc', age } = {};

// const { city, temp: temperature } = Person.location;

console.log(firstName);

//ARRAY Destructuring
// const address = ['7600 lucille', , 'Shawnee', '66214'];
// const [street, city = 'kansas city', , zip] = address;
// console.log(`${city}`);
