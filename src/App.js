
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './component/Alert';
//import About from './component/About';





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
   
    <Navbar Home="Home"  foryou="Foryou" mode={mode}  switch={space} hello={state} />
    <Alert alert={alert}/>
   
    <div className="container my-3">
    </div>
    <Textform showAlert={showAlert} hadding="Enter Your Text" mode={mode} />
    </>
  );
}

export default App;
