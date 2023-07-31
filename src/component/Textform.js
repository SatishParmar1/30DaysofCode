import React, {useState} from 'react'

export default function Textform(props) {

    const handleupper =()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
        console.log(" "+newtext);
        props.showAlert("success","Converted to upper case");
    }
    const handlelower =()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        console.log(" "+newtext);
        props.showAlert("success","Converted to Lower case");
    }
    const handleclear =()=>{
      let newtext = '';
      setText(newtext);
      console.log(" "+newtext);
     props.showAlert('danger',' You clear all Text');
  }
  const handlecopy=()=>{
    console.log("copy");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('info','Copy all Text');
  }


    const handleup =(event)=>{
        console.log("= Total Character");
        setText(event.target.value);
    }


    const [text, setText] = useState("");
  return (
    <>
   
      <div className="mb-3 my-4" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
    <label  className="form-label h2 d-flex justify-content-center ">{props.hadding} </label>
    <textarea className="form-control" value={text} onChange={handleup} id="mybox" rows="6" style={{backgroundColor:props.mode==='dark' ? 'gray' : '	rgb(248,248,248)', cursor: props.mode === 'dark' ? 'pointer' : 'text' }}></textarea>
  <div className='d-flex justify-content-center'>
  <button className="btn btn-outline-success ml-2 my-4" id="but" onClick={handleupper}> Convert to Upper Case</button>
  <button className="btn btn-outline-success mx-2 my-4" id="but" onClick={handlelower} > Convert to lower case</button>
  <button className="btn btn-outline-success mx-2 my-4" id="but" onClick={handleclear} > Clear all</button>
  <button className="btn btn-outline-success ml-2 my-4" id="but" onClick={handlecopy} > Copy Text</button>
  </div>
  </div>

  <div className="d-flex justify-content-center"  style={{color: props.mode==='dark' ? 'white' : 'black'}} > 
     <h2 className='my-4'> Your Text Summery </h2>
     </div>
     <div className="container d-flex justify-content-center" id="chareter"> 
     
     <p className=' ' style={{color: props.mode==='dark' ? 'white' : 'black'}}>  {text.length}  Character</p>
     <p className='mx-5' style={{color: props.mode==='dark' ? 'white' : 'black'}} > {text.split(" ").length }   Word Count </p>
     <p className='mr-5' style={{color: props.mode==='dark' ? 'white' : 'black'}}> {text.length>0?0.008*text.split(" ").length:"00" }  Read minutes </p>
</div>
<div className="container " style={{color: props.mode==='dark' ? 'white' : 'black'}}> 
     <h2 className='d-flex justify-content-center'> Preview </h2>
     <div className='d-flex justify-content-center border border-seconday rounded' id="privue" style={{backgroundColor:props.mode==='dark' ? 'gray' : 'rgb(245,245,245)', cursor: props.mode === 'dark' ? 'pointer' : 'text',color: props.mode==='dark' ? 'dark' : 'black' }}> {text.length>0?text:"Enter Somthing in Text area to Print"}</div>
     </div>
   
  </>
  )
}
