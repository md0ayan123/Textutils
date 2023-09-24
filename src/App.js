// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
// import About from './component/About';
import { useState } from 'react';
import Alert  from './component/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
 
// } from "react-router-dom";




function App() {
 const[mode , setMode]= useState("light") // Wheather dark mode is enable or not 

const [alert,setalert]=useState(null)
const  showAlert=(message, type)=>{
  setalert({
    msg:message,
    type:type
  
  })
  setTimeout(() => {
    setalert(null)
  }, 1500);

  

  }



 const toggleMode=()=>{
 if(mode==="light"){
  setMode("dark")
  document.body.style.backgroundColor="#042743" 
  showAlert("Dark mode has been enabled","success")
  document.title="TextUtils-Dark Mode"
 }
 else{
  setMode("light")
  document.body.style.backgroundColor="white"
  showAlert("Light mode has been enabled","success")
  document.title="TextUtils-Light Mode"
  // setInterval(()=>{
  //   document.title="Install TextUtils Now";

  // },2000)
  // setInterval(()=>{
  //   document.title="TextUtils is Amazing Mode";

  // },1500)
 }
 }



  return (    
    
  <>
{/* <Navbar title="Textutils" AboutText="AboutTextUtils" /> */}
{/* <Router> */}
<Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert} />
<div className="container my-3" >
{/* <Routes>
          <Route path="/about" element={<About/>} />  */}
{/*             
          <Route  path="/" element={  */}
             <TextForm showAlert={showAlert}heading= "Enter The text to analyze below" mode={mode}/>
        


        {/* </Routes> */}
</div>

 {/* </Router>  */}
  
  
  </>
);
    
  }

export default App;
