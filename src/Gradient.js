import React,{Component} from 'react';
import {Link} from 'react-router-dom';


import Texter from './Texter'


class Gradient extends Component{
  constructor(){
    super()
    this.state = {
      bgcolor1:"",
      bgcolor2:"",
      contentField:''
  

    
    
    }

  }

     onInputChange = (event) =>{
       this.setState({bgcolor1:event.target.value});
       this.setState({contentField:event.target.value})
      
}
onInputChange2 = (event) =>{
       this.setState({bgcolor2:event.target.value});
         this.setState({contentField:event.target.value})

 } 

    
  render(){
     const bgcolor = {
      background: `linear-gradient(to right ,${this.state.bgcolor1},${this.state.bgcolor2})`,
     }
 
    
return(
  <div>
  <div className="ul">
   <h1>GET COLOR</h1>
    <div>
     <button className="buttons">
       <Link className="link" to ="/" style={{color:'white',textDecoration:'none'}}>Click for color</Link>
     </button>
     </div>
     </div>
   <div >
      
      
    <Texter inputchange = {this.onInputChange} inputchange2 = {this.onInputChange2}   values={this.state.bgcolor2} valuess={this.state.bgcolor1} content={bgcolor.background}/>
   

   </div>
   <div className = "Appp"style={bgcolor}>
   </div>

   </div>
  )





}
}
export default Gradient;