import React from 'react';

// Creating the about page using buttons
const About =(props)=> {
    return(
      <div>
      <h1> This is my about us page</h1>
  
      <button onClick={()=>{props.history.push('/')}}>Go to Homepage</button>
      </div>
    )
  }

  export default About;