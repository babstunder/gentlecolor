import React,{Component} from 'react';
import {Link} from 'react-router-dom';


import Texter from './Texter'


class Gradient extends Component{
  constructor(){
    super()
    this.state = {
      bgcolor1:"#ff8020",
      bgcolor2:"#cc1090",
      contentField:''
  

    
    
    }

  }

     onInputChange = (event) =>{
       this.setState({bgcolor1:event.target.value});

      
}
onInputChange2 = (event) =>{
       this.setState({bgcolor2:event.target.value});
         

 } 

    
  render(){
     const bgcolor = {
      background: `linear-gradient(to right ,${this.state.bgcolor1},${this.state.bgcolor2})`,
     }
    
return(
  <div>
   <h1>GET COLOR</h1>
    <ul>
     <li style={{background:"brown"}}>
       <Link className="link" to ="/" style={{color:'white',textDecoration:'none'}}>Single Color</Link>
     </li>
     </ul>
   <div >
      
      
    <Texter inputchange = {this.onInputChange} inputchange2 = {this.onInputChange2}   values={this.state.bgcolor2} contents = {bgcolor} />
   

   </div>
   <div className = "Appp"style={bgcolor}>
   </div>

   </div>
  )





}
}
export default Gradient;