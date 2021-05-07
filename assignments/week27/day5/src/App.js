import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email:'',
      password:'',
      isChecked: true,
    };
   
    this.mySubmitHandler = this.mySubmitHandler.bind(this);
  }

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  mySubmitHandler(event) {
    console.log('A name was submitted: ' + this.state.username);
    console.log('A email was submitted: ' + this.state.email);
    console.log('A password was submitted: ' + this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Hello {this.state.username} </h1>
      <label>Name: </label>
      <br/>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <br/>
      <label>Email: </label>
      <br/>
      <input
        type='text'
        name='email'
        onChange={this.myChangeHandler}
      />
      <br/>
      <label>Password:</label>
      <br/>
      <input
        type='text'
        name='password'
        onChange={this.myChangeHandler}
      />
      <br/>
      <label>
        <input type="checkbox"
          checked={this.state.isChecked}
          onChange={this.toggleChange}
        />
        Terms and conditions.
      </label>
      <br/>
      <input
        type='submit'
      />
      </form>
      

    );
   
  }
  
}

ReactDOM.render(<MyForm />, document.getElementById('root'));


export default MyForm;