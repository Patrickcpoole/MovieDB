import React, { Component } from 'react';
import Movie from './Movie';
import styled from 'styled-components';

class MoviesList extends Component {
	state = {
		movies: []
	};

	async componentDidMount() {
		try {
			const res = await fetch(
				'https://api.themoviedb.org/3/discover/movie?api_key=d5bf760baf0734860cc8c0f30c24aad5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
			);
			const movies = await res.json();
			console.log(movies);
			this.setState({
				movies: movies.results
			});
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		return (
			<MovieGrid>
				{this.state.movies.map(movie => (
					<Movie key={movie.id} movie={movie} />
				))}
			</MovieGrid>
		);
	}
}

export default MoviesList;
const MovieGrid = styled.div`
	display: grid;
	padding: 1rem;
	grid-template-columns: repeat(6, 1fr);
	grid-row-gap: 1rem;
	@media (max-width: 1100px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (max-width: 600px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
