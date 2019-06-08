import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    var firebaseConfig = {
      apiKey: 'AIzaSyAhFJYeZH9MetiZFM6nspSpL5N2SrHyCuI',
      authDomain: 'albums-reactnative.firebaseapp.com',
      databaseURL: 'https://albums-reactnative.firebaseio.com',
      projectId: 'albums-reactnative',
      storageBucket: 'albums-reactnative.appspot.com',
      messagingSenderId: '1083791413340',
      appId: '1:1083791413340:web:577553f2ff4f68a0'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
