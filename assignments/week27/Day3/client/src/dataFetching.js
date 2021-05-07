import React from 'react';
import './App.css';

//--------------------Api fetching-----------------
class App extends React.Component{
  state={   //for initial loading, will be changed
    title:"Loading.........."
  }
  componentDidMount(){   //predefined command used for fetching
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())   //response from api, catch in another then
    .then(res2 =>{
      console.log(res2) //responding api data
      this.setState({
        title:res2[40].title  //printing title no. 40 
      })
    }) 
  }
render(){
  
    console.log(this.state)
    return(
  <div className="App">
    <h1>{this.state.title}</h1> //print on screen
      
    </div>
  )
}
}
export default App;
