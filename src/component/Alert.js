import React from 'react'

export default function Alert(props) {
  return (
   
    props.alert && (
<<<<<<< HEAD
<<<<<<< HEAD
      <div className={`alert alert-${props.alert.type} alert-dismissible position-absolute `} id="alert" role="alert">
        {props.alert.message} 
=======
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}:</strong> {props.alert.message}
>>>>>>> 24b87d9 (day6)
=======
      <div className={`alert alert-${props.alert.type} alert-dismissible position-absolute  z-1 mx-5`} id="alert" role="alert">
        {props.alert.message} 
>>>>>>> c48ce1a (day7)
      </div>
    )
  );
}
