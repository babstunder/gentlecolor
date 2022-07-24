import React from 'react';


const Navigation = ({onRouteChange, isSignedIn})=>{
    if(isSignedIn){
   return (
   	<div>
    <button  onClick = {()=>onRouteChange("Home")}>Click for Color</button>
    </div>
   );
}
   else {
   	return(
   	
      <div>
    <button  onClick = {()=>onRouteChange("Gradient")}>Click for Gradient</button>
    </div>
   		

   

   	);
   }
 

}

export default Navigation;   