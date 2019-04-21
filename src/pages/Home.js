import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import config from '../components/firebase/config';
import uiConfig from '../components/firebase/GoogleLogin';
import Credit from '../components/Credit';
import Clock from '../components/Clock';
import { Redirect } from 'react-router-dom';
import './Home.css';

firebase.initializeApp(config);

class Home extends Component {
  state = { isSignedIn: false }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }
  
  render() {
    return (
      <div className = "container-fluid">
        <div className = "text-center">
          <Clock />
          <h1>Assignmant Web</h1>
          <p>กรุณา Log in ก่อนเข้าใช้</p>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          <Credit name="Srithep Witayapanpracha" id="5910110669" />
        </div>
        {this.state.isSignedIn ? ( <Redirect to="/api" />) : (<StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />)}
      </div>
    );
  }
}

export default Home;