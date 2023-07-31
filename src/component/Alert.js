import React from 'react'

export default function Alert(props) {
  return (
   
    props.alert && (
      <div className={`alert alert-${props.alert.type} alert-dismissible position-absolute  z-1 mx-5`} id="alert" role="alert">
        {props.alert.message} 
      </div>
    )
  );
}
