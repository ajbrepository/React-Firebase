/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-11 19:02:04 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-04-21 15:59:19
 */

import * as firebase from 'firebase';
import expenses from '../reducers/expenses';

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.FIREBASE_DATABASEURL,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID
};
//Initialize the Database
firebase.initializeApp(config);
const database = firebase.database();

//Authentication provider - Google, Facebook, Twitter, GitHub
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

//Export
export { firebase, googleAuthProvider, database as default };

//Playground

// Subscribe events - child_removed
// database.ref('expenses').on('child_removed', snapshot => {
//   const removeExpenses = [];
//   snapshot.forEach(childsnapshot => {
//     removeExpenses.push({
//       id: childsnapshot.key,
//       ...childsnapshot.val()
//     });
//   });
//   console.log('Remove Expenses', removeExpenses);
// });

// Subscribe events - child_changed
// database.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// Subscribe events - child_added
// database.ref('expenses').on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

//Database insert
// Reference is similar like as schema in SQL database
// Set called on the Reference of Databse . to set the value of that schema or reference.
// database
//   .ref()
//   .set({
//     name: 'Dheeraj chaudhary',
//     age: 25,
//     stressLevel: 6,
//     job: {
//       title: 'Software developer',
//       company: 'Google'
//     },
//     isSingle: true,
//     location: {
//       city: 'Kansas',
//       country: 'United state of america'
//     }
//   })
//   .then(() => {
//     console.log('Data is saved');
//   })
//   .catch(() => {
//     console.log('Data saving failed at firebase');
//   });

// database.ref().set('This is my Firebase database');
// Ref provides the reference for the root of the application.
// database.ref('age').set(30);
// database.ref('location/city').set('Missouri');

//Adding new attribute to the root of the Reference
// database.ref('attributes').set({
//   height: 78,
//   weight: 150
// });

//Firebase Database Remove

// database
//   .ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Removed the single data node');
//   })
//   .catch(() => {
//     console.log('Data remove fsaiure');
//   });

//Firebase Data Update
// database
//   .ref()
//   .update({
//     stressLevel: 9,
//     'job/company': 'facebook',
//     'location/city': 'punjab'
//   })
//   .then(() => {
//     console.log('Database update ');
//   });

//Firebase Fetch Data from Database. Only one time
// database
//   .ref('location/city')
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log('Error Fetching data', e);
//   });

//Firebase Fetch Data from Database. Once the data is updated

// var onValueChange = database.ref().on(
//   'value',
//   snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   },
//   e => {
//     console.log('Error with data fetcing', e);
//   }
// );

// setTimeout(() => {
//   database.ref('age').set(40);
// }, 5000);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 5000);

// setTimeout(() => {
//   database.ref('age').set(40);
// }, 5000);

//Firebase does not support arrays. By default sotre data as the indexing. starting
// form 0 to number of objects.

//Get unique reference id with storing array of objects

// const firebaseObjectArrayStore = {
//   arrayObj: {
//     rowid1: {
//       name: 'Dheeraj',
//       age: 26
//     },
//     rowid2: {
//       name: 'Dheeraj',
//       age: 26
//     }
//   }
// };

// database
//   .ref()
//   .set(firebaseObjectArrayStore)
//   .then(resolve => {
//     console.log(resolve);
//   });

//Get array values from firebase
//

//Addition of some expenses as per application.

//Dummy Data to push to firebase
// const firebaseExpenses = {
//   expenses: {
//     description: 'My first description',
//     note: 'first note',
//     amount: 15,
//     createdAt:123
//   }
// }

//Firebase push to store Expenses
// database.ref('expenses').push({
//   description: 'My first description',
//   note: 'first note',
//   amount: 15,
//   createdAt: 123
// });
// database.ref('expenses').push({
//   description: 'My second description',
//   note: 'second note',
//   amount: 15,
//   createdAt: 123
// });
// database.ref('expenses').push({
//   description: 'My third description',
//   note: 'third note',
//   amount: 15,
//   createdAt: 123
// });

// database.ref('expenses').on('value', snapshot => {
//   const expenses = [];
//   snapshot.forEach(function(childSnapshot) {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });
