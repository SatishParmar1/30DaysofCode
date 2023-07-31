import React from 'react'

<<<<<<< HEAD
<<<<<<< HEAD
export default function About(props) {
  return (
    <>
    <div className=" fixed-width container my-5 border "  style={{backgroundColor:props.mode==='dark' ? '#2a294b' : 'rgb(245,245,245)'}}   id ='aboutcontainer'>
    <form>
  <div className={`form-group`}>
    <label htmlFor="exampleInputEmail1"  className={` text-${props.mode==='dark' ? 'light' : 'dark'} mt-3`} >Email address</label>
=======
export default function About() {
=======
export default function About(props) {
>>>>>>> c48ce1a (day7)
  return (
    <>
    <div className=" fixed-width container my-5 border "  style={{backgroundColor:props.mode==='dark' ? '#2a294b' : 'rgb(245,245,245)'}}   id ='aboutcontainer'>
    <form>
<<<<<<< HEAD
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
>>>>>>> 24b87d9 (day6)
=======
  <div className={`form-group`}>
    <label htmlFor="exampleInputEmail1"  className={` text-${props.mode==='dark' ? 'light' : 'dark'} mt-3`} >Email address</label>
>>>>>>> c48ce1a (day7)
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>

  </div>
  <div className="form-group">
<<<<<<< HEAD
<<<<<<< HEAD
    <label htmlFor="exampleInputPassword1"  className={` text-${props.mode==='dark' ? 'light' : 'dark'} mt-3 `}>Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group form-check my-3">
    <input type="checkbox" className="form-check-input " id="exampleCheck1"/>
    <label className={`form-check-label text-${props.mode==='dark' ? 'light' : 'dark'} `} htmlFor="exampleCheck1">Check me out</label>
  </div>
  <div className='form-group form-check' >
  <button className="btn btn-outline-success mb-2 ">Submit</button>
  </div>
=======
    <label htmlFor="exampleInputPassword1">Password</label>
=======
    <label htmlFor="exampleInputPassword1"  className={` text-${props.mode==='dark' ? 'light' : 'dark'} mt-3 `}>Password</label>
>>>>>>> c48ce1a (day7)
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group form-check my-3">
    <input type="checkbox" className="form-check-input " id="exampleCheck1"/>
    <label className={`form-check-label text-${props.mode==='dark' ? 'light' : 'dark'} `} htmlFor="exampleCheck1">Check me out</label>
  </div>
  <div className='form-group form-check' >
  <button className="btn btn-outline-success mb-2 ">Submit</button>
  </div>
<<<<<<< HEAD
  <button type="submit" className="btn btn-outline-success my-3">Submit</button>
>>>>>>> 24b87d9 (day6)
=======
>>>>>>> c48ce1a (day7)
</form>
</div>
    </>
  )
}
