import React,{Component} from 'react';
import Text from  './Text';
import Content from './Content';
import './App.css';


class App extends Component{
  constructor(){
    super()
    this.state = {
      input : '',
      bgcolor:'',
      contentField:'Select a color'
    
    }
  }
  onInputChange = (event) =>{
      this.setState({bgcolor:event.target.value})
      this.setState({contentField:event.target.value})
      }
    

  render(){
    
  
   return (
    <div>
     <h1>GET COLOR</h1> 
     <div className="con"><Content content={this.state.contentField}/></div>
     <div className ="App"style={{backgroundColor: this.state.bgcolor,height:"72.5vh"}}>
     
       <Text inputchange = {this.onInputChange}/>
      
     </div>

     </div>
    );

}
}






export default App;