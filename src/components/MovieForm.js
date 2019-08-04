import React, {Component} from 'react';
import axios from 'axios';

export default class MovieForm extends Component {

	constructor(){
		super();
		this.state={
			movie:{
				name:"",
				director:"",
				duration:"",
				rating:""
			}
		}
	}
	
	createMovie(){
		//axios.post('https://formcarry.com/s/YourFormID', {name: 'Alex', surname: 'Moran', email: 'alexmoran@bms.edu'}, {headers: {'Accept': 'application/json'}})

      //  .then(function (response) {

        //    console.log(response);

       // })
       console.log(this.state.movie.name);
	}
	
	render(){    
		return (
			<div>
			    <h2>Create Movie</h2>
				<table>
					<tr>
						<td>Movie Name:</td>
						<td><input type="text" id="name" value={this.setState({movie.name}required/></td>
					</tr>
					<tr>
						<td>Movie director:</td>
						<td><input type="text" id="director" required/></td>
					</tr>
					<tr>
						<td>Duration:</td>
						<td><input type="text" id="duration" required/></td>
					</tr>
					<tr>
						<td>Ratings:</td>
						<td><input type="text" id="rating" required/></td>
					</tr>
				</table>
	
				<button href="#" onClick={this.createMovie}>Delete</button>
			</div>
		);
	}
}

