/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-11 19:02:04 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-11 19:06:37
 */

import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyC73vY_p7f7WVrctuyO2Ipf3PbQFBdFPz0',
  authDomain: 'expensify-e94dd.firebaseapp.com',
  databaseURL: 'https://expensify-e94dd.firebaseio.com',
  projectId: 'expensify-e94dd',
  storageBucket: 'expensify-e94dd.appspot.com',
  messagingSenderId: '725993232434'
};

firebase.initializeApp(config);
firebase
  .database()
  .ref()
  .set({
    name: 'DC'
  });

//Export default
export default config;
