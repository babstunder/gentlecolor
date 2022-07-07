import React from 'react';
import './App.css';


const Texter = ({inputchange,inputchange2,contents,values})=>{
    return(
     <div>
    
   <div className= "cons">
      <h2 style={contents}></h2>
      
     </div>
 <div className="two">
   <input type ="color" onInput = {inputchange}/>
   <input type ="color" value ={values} onInput = {inputchange2}/>
       </div>
       </div>
    	
);


}


export default Texter;