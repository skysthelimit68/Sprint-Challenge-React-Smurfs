import React from 'react';
import { Link } from 'react-router-dom';

const Smurf = props => {

  const deleteSmurf = () => {
    props.deleteSmurf(props.id)
  }
  const updateActiveSmurf = smurf => {
      props.updateActive(smurf);
  }
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={deleteSmurf}>Delete</button>
      <Link to={`/smurf/smurf-update/`}>
        <button 
        onClick = {() => {updateActiveSmurf  ({name:props.name, height:props.height,age:props.age, id: props.id})}}>Update</button>
      </Link>
     
    </div >
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

