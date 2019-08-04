import React, {Component} from 'react';
import axios from 'axios';
import MovieCard from "./MovieCard";

export default class Movies extends Component {

    constructor(props) {
        super(props);
        this.state = {movielist: []};
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/movies/list')
            .then(res => {
				console.log(res.data.data);
                this.setState({movielist: res.data.data});
            });
    }

	delMovie(movieName){
		if(window.confirm("Are you sure?")){
			axios.delete(`http://localhost:8000/api/movies/${movieName}`)
		        .then(res => {
					let list=this.state.movielist;
					list.pop({name:movieName});
					this.setState({movielist: list});
		            console.log(`${movieName} deleted`);
		        });	
		}
	}
	
    render() {

		return (
			<ul>
			{this.state.movielist.map(movie=> <MovieCard name={movie.name}
														details={movie}
														delM={()=>this.delMovie(movie.name)}
														/>)}
			</ul>
		);
	}
}
