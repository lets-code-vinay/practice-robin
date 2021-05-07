import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './containers/Home/index';
import Signup from './containers/Signup/index';
import Signin from './containers/Signin/index';


function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path='/' component= {Home} />
         <Route path='/signup' component= {Signup} />
         <Route path='/signin' component= {Signin} />

       </Switch>
     </Router>
    </div>
  );
}

export default App;
