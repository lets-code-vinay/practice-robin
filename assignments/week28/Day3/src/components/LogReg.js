import React from 'react';
import './Login.scss';
import {Login, Register} from './login/index';

class Log extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggingActive: true
        };
    }
    componentDidMount(){
        //Add . right Default
        this.rightSide.classList.add("right");
    }
    changeState(){
        const { isLoggingActive} = this.state;
        if(isLoggingActive){
            this.rightSide.classList.remove("right");
            this.rightSide.classList.add("Login");
        }
        else{
            this.rightSide.classList.remove("left");
            this.rightSide.classList.add("right")
        }
        this.setState(prevState => ({isLoggingActive : !prevState.isLoggingActive}))    
    }
        
    render(){
        const {isLoggingActive} = this.state;
        const current = isLoggingActive ? "Register" : "Login";
        const currentActive = isLoggingActive ? "Login" : "Register";
        return(
            <div className="App">
                <div className="login">
                    <div className="container" ref = {ref => (this.container = ref)}>
                        {isLoggingActive && (
                        <Login containerRef={(ref) => this.current = ref}/>)}

                        {!isLoggingActive && 
                            ( <Register containerRef={(ref) => (this.current = ref)} />)}
                    </div>
                    <RightSide current = {current} currentActive={currentActive}  containerRef= {ref => this.rightSide = ref} onClick= {this.changeState.bind(this)}/>

                    </div>
                 </div>     
        );
    }
}
const RightSide = props => {
    return(
    <div className="right-side" ref = {props.containerRef} onClick={props.onClick }>
        <div className="inner-container">
            <div className="text"> 
                {props.current}
            </div>
        </div>
    </div>
    )
} 
export default Log;
