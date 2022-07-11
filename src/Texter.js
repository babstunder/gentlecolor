import React from 'react';
import './App.css';


const Texter = ({inputchange,inputchange2,content,values ,valuess})=>{
    return(
     <div>
    
   <div className= "cons">
      <h2>{content};</h2>
      
     </div>
     <div className="consss">
        <input type = "text"className="text2" value={valuess} placeholder="Type any color1" onChange = {inputchange}/>
        <input type = "text" className="text3" value={values} placeholder="Type any color2" onChange = {inputchange2}/>

      </div>
 <div className="two">
   <input type ="color" onInput = {inputchange}/>
   <input type ="color" value ={values} onInput = {inputchange2}/>
       </div>
       </div>
    	
);


}


export default Texter;