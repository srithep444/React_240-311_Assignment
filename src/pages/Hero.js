import React, { Component } from 'react';
import firebase from 'firebase';
import { withRouter } from 'react-router-dom';
import Api from '../components/firebase/API';

class Hero extends Component {

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <span className="text-center">
            <div>
              <div>Signed In!</div>
              <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
              <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
              <img
                alt="profile picture"
                src={firebase.auth().currentUser.photoURL}
                width="10%"
              />

              <Api />
            </div>
      </span>
      
    );
  }
}

export default withRouter(Hero);