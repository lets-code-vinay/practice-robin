import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import {BrowserRouter, Route} from 'react-router-dom'; 


//Creating component like homepage, about page

// // Creating the about page
// const About =()=> {
//   return(
//     <div>
//     <h1> This is my about us page</h1>
//     <em> What you want to know about me </em>
//     </div>
//   )
// }

// // Creating the about page using prop and set interval
// const About =(props)=> {
//   console.log(props)
//   setTimeout(()=>{
//     props.history.push('/')
//   }, 4000)
//   return(
//     <div>
//     <h1> This is my about us page</h1>
//     <em> Automatic redirect to homepage if idle for 4 secs </em>
//     </div>
//   )
// }

// // Creating the about page using buttons
// const About =(props)=> {
//   return(
//     <div>
//     <h1> This is my about us page</h1>

//     <button onClick={()=>{props.history.push('/')}}>Go to Homepage</button>
//     </div>
//   )
// }

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>  {/*To use router*/}
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
      </BrowserRouter>
    )
  }
}
export default App;
