import React,{Component} from 'react';
import Navigation from './Navigation';
import './App.css';
import Text from  './Text';
import Gradient from './Gradient';




class App extends Component{
  constructor(){
    super()
    this.state = {
        bgcolor:'',
        contentField:'Select/Type ',
        route:'Home',
        isSignedIn:'false'
    
    
    }
  }
  
  onInputChange = (event) =>{
      this.setState({bgcolor:event.target.value})
     
      this.setState({contentField:event.target.value})
      }
  onRouteChange =(route)=>{
  if(route === "Home"){
    this.setState({isSignedIn:false})
  }
  else if(route === "Gradient"){
    this.setState({isSignedIn:true})
  }

    this.setState({route:route})
  }
    

  render(){
     const backcolor ={
        background:this.state.bgcolor
     };
  
   return (
    <div>
    <div className="ul">
     <h1>GET COLOR</h1> 
       <Navigation isSignedIn ={this.state.isSignedIn} onRouteChange ={this.onRouteChange}/> 
   </div>
    { this.state.route === 'Home'?
    <div>
   
   
    <Text inputchange = {this.onInputChange} values={this.state.bgcolor} content={this.state.contentField}/>
     
     
     <div>
      <div className="color">
      <input type ="color" value = {this.state.bgcolor} onInput = {this.onInputChange} /></div>
     
     <div className = "App" style={backcolor}>
      

     </div>
     </div>
     

     </div>
      :<Gradient onRouteChange={this.onRouteChange}/>
   }

     </div>

    );

}
}





export default App;