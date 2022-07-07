import React from 'react';  
import {
  BrowserRouter as Router,
  Routes,
  Route,}
  from "react-router-dom";
import './App.css';
import Home from  './Home';

import Gradient from './Gradient';




const App =()=>{
  return(
  <>

    <Router>
      <Routes>
         <Route exact path = "*" element ={<Home/>}/>
         <Route exact path = "/Gradient" element={<Gradient/>}/>
         
         </Routes>
        </Router>


     </>
         
  


    );

}

export default App;