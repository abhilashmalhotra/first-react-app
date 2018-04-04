// import React from 'react';

// const person = (props) => {
// 	return <h1>Hi I am {props.name}, and I am {props.age} Year Old</h1>;
// }

// export default person;

//

import React, {Component} from 'react';

import './Person.css';

class Person extends Component{
	render(){
		return (
			<div className="Person">
				<h1 onClick={this.props.click}>Hi I am {this.props.name}, and I am {this.props.age} Year Old</h1>
				<p>{this.props.children}</p>
				<input type="text" onChange={this.props.changed} value={this.props.name} />
			</div>
			);
		}
	}

	export default Person;