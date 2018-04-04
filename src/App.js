import React, { Component } from 'react';
import Person from './Person/Person';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: 'Abhilash', age: 25},
      {name: 'Vicky', age: 28},
      {name: 'Nitin', age: 24},
      {name: 'Inder', age: 30},
    ]
  }

  switchNameHandler = () => {
    console.log('Button Clicked');
  }

  render() {
   // return React.createElement('div',{className: 'center'},React.createElement('h1',null,'Hello Abhilash'));
   return (
      <div className="center">
        <h1>Hello Abhilash</h1>
        <button onClick={this.switchNameHandler}>Switch</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
      </div>
    );
  }
}

export default App;
