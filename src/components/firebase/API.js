import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
const URL = "https://cors-anywhere.herokuapp.com/https://us-central1-assignment-9f57f.cloudfunctions.net/listhero/";

class Api extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listhero: {}
    }
  }

  componentDidMount() {
    axios.get(URL).then(response => {
        this.setState({listhero: response.data})
        console.log(response.data)
    })
  }

  renderHero() {
    return _.map(this.state.listhero, hero => {
        return (
          <div className = "container">
              <div  className="card text-white bg-primary mb-3" style={{ width: '15rem' }}> 
                <h2 className="card-title">{hero.hero_name}</h2>
                <img src={hero.hero_icon} width="100%" />
                <h3>Type: {hero.hero_type}<br/></h3>
              </div> 
          </div>  
        )
    })
  }

  render() {
    return (
      <div>
        {this.renderHero()}
      </div> 
    )
  }
  
}

export default Api;