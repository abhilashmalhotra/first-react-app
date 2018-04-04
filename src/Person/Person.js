// import React from 'react';

// const person = (props) => {
// 	return <h1>Hi I am {props.name}, and I am {props.age} Year Old</h1>;
// }

// export default person;

//

import React, {Component} from 'react';

class Person extends Component{
	render(){
		return (
			<div>
				<h1>Hi I am {this.props.name}, and I am {this.props.age} Year Old</h1>
				<p>{this.props.children}</p>
			</div>
			);
		}
	}

	export default Person;