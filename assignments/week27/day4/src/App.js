import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
      super(props);
      this.state ={
          name: 'Shaktimaan'
      }
  }
  render(){
      return(
          <div>
              <Navbar name={this.state.name} />
          </div>
      );
  }
};

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>Hello Coders</h1>
                <h2> My name is: {this.props.name}</h2>
            </div>
        )
    }
}
export default App;
