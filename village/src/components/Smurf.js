import React from 'react';
import axios from 'axios';
import { resolve } from 'path';

const Smurf = props => {

  const deleteSmurf = id => {
    console.log(id)
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={() => deleteSmurf(props.id)}>Delete</button>
      <button>Update</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

