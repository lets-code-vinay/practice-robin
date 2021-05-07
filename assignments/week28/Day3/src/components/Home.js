import React from 'react';

const Home =(props)=>{
    return(
      <div>
        <h1> This is homePage</h1>
        <button onClick={()=> {props.history.push('/about')}}>About</button>
      </div>
    )
  }

export default Home;