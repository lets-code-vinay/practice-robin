import React from 'react';
import './App.css';

//function based component
// function App() {
//   return (
//     <div className="App">
     
//      <h1>Vinay Maurya</h1>
//      </div>
//   );
// }

// //class based component
// class App extends React.Component{
//   render(){
//     const arr = ['eat','sleep','code', 'repeat'];
  
//     return(
//       <div className="App"  >
//         <h1>Some Random Number :{Math.floor(Math.random()*10000)}</h1>
//         {  arr.map(item => {
//       return <h2>{item}</h2>
//     })  }
//       </div>
//     )
//   }
// }

// //Components
// const Coder = () =>{
//   return (
//     <h1>Components</h1>
//   )
// }

// class App extends React.Component{
//   render(){
    
//     return(
//       <div className="App"  >
//         <h1>Hello react</h1>
//         <Coder />
//         <em><Coder /></em>
//       </div>
//     );
//   }
// }

// //Components with props
// const Coder = (props) =>{
//   return (
//     <h1>{props.name} is {props.status } and his/her age is{props.age}</h1>
//   )
// }

// class App extends React.Component{
//   render(){
    
//     return(
//       <div className="App"  >
//         <h1>Hello react</h1>
//         <Coder name="Vinay" status="Single" age="27"/>
//         <em><Coder name="Anay" status="Unborn" age="0" /></em>
//         <b><Coder name="Vaidehi" status="in womb" age="0"/></b>
//       </div>
//     );
//   }
// }


// //---------class based props--------------
// //Components with props
// class Coder extends React.Component{
//   render(){
//     return (
//       <div>
//       <h1>{this.props.name} is {this.props.status } and his/her age is{this.props.age}</h1>
//       </div>
//       )
//   }
// }

// class App extends React.Component{
//   render(){
    
//     return(
//       <div className="App"  >
//         <h1>Hello react</h1>
//         <Coder name="Vinay" status="Single" age="27"/>
//         <em><Coder name="Anay" status="Unborn" age="0" /></em>
//         <b><Coder name="Vaidehi" status="in womb" age="0"/></b>
//       </div>
//     );
//   }
// }

// //---------insert nested div tag--------------
// //Components with nmested div
// const Coder=(props)=> {
//     return (
//       <div>
//       <h1>{props.name}</h1>
//       <h1> is {props.status } </h1>
//       <h3> and his/her age is{props.age}</h3>
//       <h2>{props.children}</h2>
//       </div>
//       )
//     }


// class App extends React.Component{
//   render(){
    
//     return(
//       <div className="App"  >
//         <h1>Hello react</h1>
//         <Coder name="Vinay" status="Single" age="27">Children </Coder>
//         <em><Coder name="Anay" status="Unborn" age="0" /></em>
//         <b><Coder name="Vaidehi" status="in womb" age="0"/></b>
//       </div>
//     );
//   }
// }

// //---------Satte and changing data dynamically--------------
// //Comppnents with state
// const Coder=(props)=> {
//   return (
//     <div>
//     <h1>{props.name}</h1>
//     <h1> is {props.status } </h1>
//     <h3> and his/her age is{props.age}</h3>
//     <h2>{props.children}</h2>
//     </div>
//     )
//   }


// class App extends React.Component{

// state={
//   title:"wife",
//   status:"married"

// }
//   render(){
  
//   return(
//     <div className="App"  >
//       <h1>Hello react</h1>
//       <h1>Rinki was my {this.state.title} and she was my {this.state.status}to me</h1>
//       </div>
//   );
// }
// }


//---------Satte and changing data dynamically with button--------------
class App extends React.Component{

state={
  title:"wife",
  status:"married"
}

// changeName(){
//   this.setState({
//     title:"love",
//     status:"lied"
//   })
//------------On argument change------------
    //changeName=(l, li)=>{
      changeName(l, li){
      this.setState({
        title:l,
        status:li
      })
}
  render(){  
    console.log(this.state)
    return(
      <div className="App"  >
        <h1>Hello react</h1>
        <h1>pratishtha was my {this.state.title} and she was {this.state.status} to me</h1>
        <button onClick={()=>this.changeName()}>Change1</button>
        <button onClick={this.changeName.bind(this, "love", "lied")}>Change</button>
        
        <button onClick={()=>this.changeName("love", "lied")}>Change3</button>
        
        </div>
    );
}
}



export default App;
