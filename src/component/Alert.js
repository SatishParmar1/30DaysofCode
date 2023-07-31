import React from 'react'

export default function Alert(props) {
  return (
   
    props.alert && (
      <div className={`alert alert-${props.alert.type} alert-dismissible position-absolute `} id="alert" role="alert">
        {props.alert.message} 
      </div>
    )
  );
}
