import React, { Component } from 'react';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MoviesDetail extends Component {
	state = {
		movie: {}
	};

	async componentDidMount() {
		try {
			const res = await fetch(
				`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=d5bf760baf0734860cc8c0f30c24aad5&language=en-US`
			);
			const movie = await res.json();
			console.log(movie);
			this.setState({
				movie
			});
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		const { movie } = this.state;
		return (
			<div>
				<img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title} />
				<h1>{movie.title}</h1>
				<h3>{movie.release_date}</h3>
				<p>{movie.overview}</p>
			</div>
		);
	}
}

export default MoviesDetail;
