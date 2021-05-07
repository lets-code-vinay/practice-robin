import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter, Route} from 'react-router-dom';
//importing {BrowerRoute and Route} from 'react-route-dom' package
import Home from './components/Home'
import About from './components/About'

class App extends React.Component{
  render(){
    return(
      <BrowserRouter> 
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home}/>  
        <Route path='/about' component={About} />  
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
