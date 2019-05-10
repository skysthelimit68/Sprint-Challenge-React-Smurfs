import React from 'react';
import { Link } from 'react-router-dom';

const Smurf = props => {

  const deleteSmurf = () => {
    props.deleteSmurf(props.id)
  }
  const updateActiveSmurf = smurf => {
      props.updateActive(smurf);
  }
  const setProfile = smurf => {
    props.setProfile(smurf);
  }
  let smurfie = {name:props.name, height:props.height,age:props.age, id: props.id}
  return (
    <div className="Smurf">
      <Link to={`/smurf/${props.id}`}>
        <h3 onClick={() => {setProfile(smurfie)}}>{props.name}</h3>
      </Link>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={deleteSmurf}>Delete</button>
      <Link to={`/smurf/smurf-update/`}>
        <button 
        onClick = {() => {updateActiveSmurf  (smurfie)}}>Update</button>
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

