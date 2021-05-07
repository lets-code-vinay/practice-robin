import React from 'react';


const About =(props)=>{ 
    return(
      <div>
        <h1> This is AboutPage</h1> //following syntax use to route to page
        <button onClick={()=> {props.history.push('/')}}>Home</button>
      </div>
      )
  }
  

export default About;