import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import config from './components/firebase/config';
import uiConfig from './components/firebase/GoogleLogin';
import './Home.css';

firebase.initializeApp(config);

class Home extends Component {
  render() {
    return (
      <div className = "container-fluid">
        <div className = "text-center">
          <h1>Assignmant Web</h1>
          <p>กรุณา Log in ก่อนเข้าใช้</p>
        </div>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    );
  }
}

export default Home;