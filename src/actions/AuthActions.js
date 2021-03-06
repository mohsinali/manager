import firebase2 from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {

  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    console.log('Flag A');

    firebase2.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log('Flag 1');
        loginUserSuccess(dispatch, user)
      })
      .catch(() => {
        console.log('Inside Catch');
        firebase2.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
}

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL
  });
}