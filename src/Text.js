import React from 'react';


const Text = ({inputchange,content,values})=>{
    return(
     <div className ="con">
    
     <div className= "cons">
      <h2 >{content}</h2>
     </div>
          
      <div className="conss">
      	<input type = "text" value={values} placeholder="Type a color" onChange = {inputchange}/>

      </div>
       
   </div>
    	);


}


export default Text;