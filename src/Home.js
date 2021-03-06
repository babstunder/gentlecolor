import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Text from  './Text';
import './App.css';





class Home extends Component{
  constructor(){
    super()
    this.state = {
        bgcolor:'',
        contentField:'Select/Type '
    
    
    }
  }
  
  onInputChange = (event) =>{
      this.setState({bgcolor:event.target.value})
     
      this.setState({contentField:event.target.value})
      }
    

  render(){
     const backcolor ={
        background:this.state.bgcolor
     };
  
   return (
    <div>
    <div className="ul">
     <h1>GET COLOR</h1> 
     
     <div>
     <button>
       <Link to ="/Gradient" style={{color:'white',textDecoration:'none'}}>click for Gradient</Link>
     </button>
     </div>
     </div>
     <Text inputchange = {this.onInputChange} values={this.state.bgcolor} content={this.state.contentField}/>
     
     
     <div>
      <div className="color">
      <input type ="color" value = {this.state.bgcolor} onInput = {this.onInputChange} /></div>
     
     <div className = "App" style={backcolor}>


     </div>
     </div>
     </div>
    );

}
}

export default Home;