/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-04-21 16:05:04 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-04-21 17:06:35
 */

import { firebase, googleAuthProvider } from './../firebase/firebase';

export const login = uid => ({
  type: 'LOGIN',
  uid: uid
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = uid => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
