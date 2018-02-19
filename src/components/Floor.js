import React from 'react';
import { Entity } from 'aframe-react';

const Floor = (props) => {
  return (
    <Entity
      primitive="a-plane"
      rotation="-90 0 0"
      width={100}
      height={100}
      static-body={true}
    />
  )
}

export default Floor;