import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [ 
      {name: 'Ed',age: 33}, 
      {name: 'Nu', age: 33}
    ]
  }

  switchNameHandler = () => {
    console.log('was clicked!');
    //this.state.persons[0].name = "Eduard";
    this.setState({persons: [
      {name: 'Eduard',age: 33}, 
      {name: 'Núria', age: 33}
    ]});
  }

  render() {
    return (
      <div className="App">
       <h1>Hi, i'm a react app</h1>
       <p>This is really working</p>
       <button onClick={this.switchNameHandler} >Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>El meu hobbie: cine!</Person>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>El meu hobbie: cine!</Person>

      </div>
    );
  }
}

export default App;
