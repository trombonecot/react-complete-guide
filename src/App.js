import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person/Person';

class App extends Component {
  state = {
    persons: [ 
      {name: 'Ed',age: 33}, 
      {name: 'Nu', age: 33}
    ],
    showPersons: false
  }

  switchNameHandler = ( newName ) => {
    this.setState({persons: [
      {name: newName,age: 33}, 
      {name: 'Núria', age: 33}
    ]});
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: 'Ed',age: 33}, 
      {name: event.target.value, age: 33}
    ]});
  }

  tooglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  }

  render() {

    const style = {
      backgroundColor: 'lightGrey',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
      <div>
        {this.state.persons.map(person => {
          return (<Person 
                          name={person.name} 
                          age={person.age}>
                </Person>)
        })}</div>)
    }


    return (
      <div className="App">
       <h1>Hi, i'm a react app</h1>
       <p>This is really working</p>
       <button style={style} onClick={this.tooglePersonsHandler} >Show Persons</button>
       
       {persons}
      </div>
    );
  }
}

export default App;
