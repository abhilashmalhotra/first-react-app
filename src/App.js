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
    ],
    showDiv: false
  }

  // switchNameHandler = (myName) => {
  //   //console.log('Button Clicked');
  //   //this.state.persons[0].name = 'Abhilash Malhotra';
  //   this.setState({
  //     persons: [
  //     {name: myName, age: 25},
  //     {name: 'Vicky', age: 28},
  //     {name: 'Nitin', age: 24},
  //     {name: 'Inder', age: 40},
  //     ]
  //   });
  // }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
      {name: 'Abhilash', age: 25},
      {name: event.target.value, age: 28},
      {name: 'Nitin', age: 24},
      {name: 'Inder', age: 40},
      ]
    });
  }

  toggleHandler = () =>{
    console.log('click');
    const doesShow = this.state.showDiv;
    this.setState({
      showDiv: !doesShow
    });
  }

  render() {
    const style = {
      background: '#ff4545',
      color: '#fff',
      position: 'relative',
      padding: '5px 15px',
      marginTop: '6px',
      boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)',
      borderRadius: 0,
      display: 'inline-block',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.42857143,
      textAlign: 'center',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      border: '1px solid transparent',
    }


   // return React.createElement('div',{className: 'center'},React.createElement('h1',null,'Hello Abhilash'));
   return (
    <div className="center">
    <h1>Hello Abhilash</h1>
    <button style={style} onClick={this.toggleHandler}>Toggle Div</button>
    {
      this.state.showDiv === true ?
      <div>
      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age} />
      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}
      changed={this.nameChangeHandler} />
      <Person 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age}></Person>
      <Person 
      name={this.state.persons[3].name} 
      age={this.state.persons[3].age} />
      </div> 
      : null
    }
    </div>
    );
 }
}

export default App;
