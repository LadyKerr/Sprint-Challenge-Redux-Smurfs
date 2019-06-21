import React from 'react';
//import { Card, CardTitle, CardText } from 'reactstrap';

const SmurfList = props => {
  return (
    <div>
      <div>
        <h1>{props.smurf.name}</h1>
          <p>{props.smurf.age}</p>
          <p>{props.smurf.height}</p>
      </div>
    </div>
  )
}

export default SmurfList;