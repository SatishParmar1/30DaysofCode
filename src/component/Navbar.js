import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <>
    <div className="container-lg" style={{backgroundColor:props.mode==='dark' ? 'rgb(39, 38, 71)' : 'rgb(223, 223, 255)', color: props.mode==='dark' ? 'white' : 'black'}}>DAY Eight(8)</div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm  mb-5 bg-white ">
    <div className={`container-fluid pt-0 pb-0 mt-0 navbar-${props.mode} bg-${props.mode}`}>
      <a className="navbar-brand" href="#">30DAYSOFCODE</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >   
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="textform"> {props.Home} </a>
          </li>
        
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {props.foryou}
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Hi</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Hello</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Hey</a></li>
            </ul>
          </li>
         
        </ul>
        <div className="nav-item" id ="loginitem">  
        <a className={`nav-link active" text-${props.mode==='dark' ? 'light' : 'dark'}` }  href="/login" >Login</a>
          </div>
        <div className={`form-check form-switch mx-5 text-${props.mode==='dark' ? 'light' : 'dark'} `}>
              <input className="form-check-input mx" onClick={props.switch} type="checkbox" role="switch"  id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> {props.hello}</label>
       </div>


      </div>
    </div>
  </nav>
    </>
  )
}


Navbar.propTypes = {
    Home: PropTypes.string.isRequired,
    foryou: PropTypes.string.isRequired
}
