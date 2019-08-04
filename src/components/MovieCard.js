import React, {Component} from 'react';
import axios from 'axios';

export default class MovieCard extends Component {

	constructor(){
		super();
		this.display=this.display.bind(this);
		this.delMovie=this.delMovie.bind(this);	
	}
	display(){
		let movie=this.props.details;
		alert(`${movie.name}\ndirected by- ${movie.director}\nlength- ${movie.duration}\nrating- ${movie.rating}`);	
	}
	delMovie(){
		if(window.confirm("Are you sure?")){
			axios.delete(`http://localhost:8000/api/movies/${this.props.name}`)
		        .then(res => {
		            console.log("Movie deleted");
		        });	
		}
	}
	render(){    
		return (
			<li>
			    <h2>{this.props.name}</h2>
				<button onClick={this.display}>Details</button>
				<button href="#" onClick={this.props.delM}>Delete</button>
			</li>
		);
	}
}

