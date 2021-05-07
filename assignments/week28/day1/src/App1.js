import React from 'react';
import './App.css';

//function component
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello beautiful world</h1>
//     </div>
//   );
// }
// class App extends React.Component{
//   render(){
//      return (
//       <div className="App">
//         <h1>Class component</h1>
//         <h2>{Math.floor(Math.random() *100 )}</h2>  //(jsx = combination of JS and html fot dynamic)
//       </div>
//     );
//   }
  
// }
//Componanet based without prop
// const Coder = () =>{
//   return (
//     <div> <h1> <em>Coder never quit</em> </h1>
//      <span>in sending function to class component</span> </div>
     
//   )
// }

// //Componanet based with prop --> prop = properties
// const Coder = (props) =>{
//   return (
//     <div> <h1> <em>Coder never quit</em> </h1>
//      <span>{props.name} and it is {props.status}</span> </div>
     
//   )
// }

//class based with prop 
// class Coder extends React.Component{
//   render(){
//   return (
//     <div> <h1> <em>Coder never quit</em> </h1>
//      <span>{this.props.name} and it is {this.props.status}</span> </div>
     
//   )
//   }
// }

//-----------------------------------------------
// class App extends React.Component{
//   render(){
//     const arr = ['east','west','north', 'south'];
//       return (
//         <div className="App">
//           {
//             arr.map(item => {
//             return <h1>{item}</h1>
//             })       
//         }
//         <Coder name="Vinay" status="Broken" />
//         <Coder name="Vaidehi" status="Orphan" />
//          </div>
//       );
//   }  
// }

//State is responsible for dynamically change in inside the data
// class App extends React.Component{
//   state ={
//     title : "Vinay",
//     status : "Broken",
//     gender: "he"
//   }
//   changeName(){
//     this.setState({
//       title:"Vaidehi",
//       status:"Alone",
//       gender:"she"
//     })
//   }
//   render(){
//     console.log(this.state)
//       return (
//         <div className="App">
//           <h1> {this.state.title} and {this.state.gender} is {this.state.status} </h1>
//          <h1> {this.state.title}  </h1>
         
//          <button onClick = {()=> this.changeName()}> Change name</button>
//          </div>
//       );
//   }  
// }

// //passing argument to change name dynamically after click using bind()
// class App extends React.Component{
//   state ={
//     title : "Vinay",
//     status : "Broken",
//     gender: "he"
//   }
//   //changeName=(name,rel)=>{
//   changeName(name,rel){
  
//     this.setState({
//       title:name,
//       status:rel,
//       gender:"she"
//     })
//   }
//   render(){
//     console.log(this.state)
//       return (
//         <div className="App">
//           <h1> {this.state.title} and {this.state.gender} is {this.state.status} </h1>
                  
//          {/*<button onClick = {this.changeName.bind(this,"Anaya", "Commited")}> Change name</button> */}
//          <button onClick = {()=>this.changeName("Anaya", "married")}> Change name</button>
    
//          </div>
//       );
//   }  
// }
//------------------------------------------------
//------------Fetching data-----------------------

class App extends React.Component{
    state={
      title :"Loading......"
    }
    componentDidMount(){  //to fetch data
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res =>res.json())
    .then(res2 =>{
      console.log(res2)
      this.setState({
        title:res2[0].title
      })
    }) 
    }
      render(){
    return (
      <div className="App">
          <h1>Json data fetching </h1>
          <h1> Here is the title -{this.state.title}</h1>
      </div>
    )
  }
}

export default App;
