
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './component/Alert';
// import About from './component/about';

// import { BrowserRouter as Router, Routes,Route } from "react-router-dom";





function App() {
  const [mode, setMode] = useState('light');
  const [state, setState] = useState('Enable Dark mode');
  const[alert, setAlert] = useState(null);


  const showAlert = (type,message) =>{
    setAlert({
      type:type,
      message:message,
   })
  
  setTimeout(() => {
    setAlert(null);
  }, 3000); 
  }
  const space = () => {

  if (mode === 'light') {
    setMode('dark');
   setState('Enable light mode');
   showAlert('success','Dark mode has been Enable');
    document.body.style.background='rgb(17 24 39)';
    document.title="30DAYSCODE-DARK";
  } else {
    setMode('light');
    setState('Enable Dark mode');
    showAlert('success','Light mode has been Enable');
    document.body.style.background='white';
    document.title="30DAYSCODE";
  }
  }

  return (  
   
   
 <>
   
   {/*
    //<Router>    */}  
         <Navbar Home="Home"  foryou="Foryou" mode={mode}  switch={space} hello={state} />
    <Alert alert={alert}/>
    
       {/*
     // <Routes>
     // <Route path="/" 
      element={     */}  
        <div className="container my-3" id="textformtop">
      <Textform showAlert={showAlert} hadding="Enter Your Text" mode={mode} />
      </div>
    {/*   }
      />
      </Routes>
    
    <Routes>
      <Route path="/login" 
      element={    
      <About mode={mode} />
      }/>
    */}    
    {/* </Routes>
    
      <Routes>
      <Route path="/textform" 
      element={   
      <div className="container my-3">
       <Textform showAlert={showAlert} hadding="Enter Your Text" mode={mode} />
       </div>
        }/>
       
      </Routes>
      </Router>
 */} 
      </>   
   
   
  );
}

export default App;
