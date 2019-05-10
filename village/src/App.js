import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route, NavLink} from 'react-router-dom';
import SmurfUpdate from './components/SmurfUpdate';
import SmurfProfile from './components/SmurfProfile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      active: {},
      profile:{}

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
        smurfs: res.data,
      })
    })
    .catch(err => {
      console.log("Something went wrong in the Smurf Village!", err)
    })
  }

  setProfile = smurf => {
    this.setState({
      profile : smurf
    })
  }

  updateSmurf = smurf => {
    console.log(smurf.id)
    axios
      .put(`http://localhost:3333/smurfs/${smurf.id}`, {
        name: smurf.name,
        height: smurf.height,
        age: smurf.age
      })
      .then(res => {
        this.setState({
          smurfs: res.data,
        })
      })
      .catch(err => {
        console.log(err);
      });
  }


  deleteSmurf = id => {
    console.log(id)
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({
          smurfs: res.data,
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  addSmurf = smurf => {
    // add code to create the smurf using the api
    axios
    .post('http://localhost:3333/smurfs', {
      name: smurf.name,
      age: smurf.age,
      height: smurf.height
    })
    .then( res => {
      this.setState({
        smurfs : res.data
      })
      console.log("Smurf Village is getting BIGGER!!!", res)
    })
    .catch( err => {
      console.log("Something bad just happened in the Smurf Village", err)
    })
  }

  getNewSmurfs() {
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      if(this.state.smurfs !== res.data)
      this.setState({
        smurfs : res.data,
      })
    })
    .catch(err => {
      console.log("Something went wrong in the Smurf Village!", err)
    })
  }

  updateActive = smurf => {
    console.log(smurf);
    this.setState({
      active : smurf
    })
  }

  render() {
    return (
      <div className="App"> 
        <header>
          <h1>Smurf Village</h1>
          <nav>
            <NavLink to="/">
              Smurf Village
            </NavLink>
            <NavLink to="/smurf-form">
              Add Smurf
            </NavLink>
          </nav>
        </header>
        <div className="full-imgWrap">
          <img src="https://www.awn.com/sites/default/files/styles/original/public/image/featured/1026833-sony-rounds-out-voice-cast-smurfs-lost-village.jpg?itok=cw-O8WBp"/>
        </div>
        <Route 
          exact 
          path="/" 
          render = {(props) => 
          <Smurfs 
          {...props} 
          smurfs={this.state.smurfs} 
          deleteSmurf={this.deleteSmurf} 
          setProfile={this.setProfile}
          updateActive={this.updateActive}/>}
        />

        <Route 
          path="/smurf-update/"
          render = {(props) => 
          <SmurfUpdate 
          {...props} 
          smurf={this.state.active} 
          updateSmurf={this.updateSmurf}/>}
        />

        <Route 
          path="/smurf-form" 
          render = {(props) => 
          <SmurfForm 
          {...props} 
          addSmurf = {this.addSmurf}/>}
        /> 

        <Route 
          path="/smurf/:id"
          render = {(props) => 
          <SmurfProfile 
          {...props}
          profile = {this.state.profile}
          />}


        />
      </div>
    );
  }
}

export default App;
