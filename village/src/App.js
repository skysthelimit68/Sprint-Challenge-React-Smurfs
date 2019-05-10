import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route, NavLink} from 'react-router-dom';
import Smurf from './components/Smurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],

    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      this.setState({
        smurfs: res.data
      })
    })
    .catch(err => {
      console.log("Something went wrong in the Smurf Village!", err)
    })
  }

componentDidUpdate() {
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      if(res.data !== this.state.smurfs) {
        console.log("Smurf village just got bigger!", res)
        this.setState({
          smurfs : res.data
      })
      }
      

    })
    .catch(err => {
      console.log("Something went wrong in the Smurf Village!", err)
    })
}

  getNewSmurfs() {
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      if(this.state.smurfs !== res.data)
      this.setState({
        smurfs : res.data,
        updated: false
      })
    })
    .catch(err => {
      console.log("Something went wrong in the Smurf Village!", err)
    })
  }

  render() {
    return (
      <div className="App"> 
        <header>
          <nav>
            <NavLink to="/">
              <button>Smurf Village</button>
            </NavLink>
            <NavLink to="/smurf-form">
              <button>Add Smurf</button>
            </NavLink>
          </nav>
        </header>
        <Route 
        exact 
        path="/" 
        render = {(props) => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />

        <Route 
        path="/smurfs/:id"
        component = {Smurf}
        />

        <Route 
        path="/smurf-form" 
         component = {SmurfForm}
        /> 
      </div>
    );
  }
}

export default App;
