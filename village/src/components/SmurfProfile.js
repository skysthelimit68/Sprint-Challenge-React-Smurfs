import React from 'react';


const SmurfProfile = props => {
    
    
    return(
        <div className="Smurf">
      
        <h3>{props.profile.name}</h3>
      
      <strong>{props.profile.height} tall</strong>
      <p>{props.profile.age} smurf years old</p>
      
    </div >
    )
}

export default SmurfProfile;