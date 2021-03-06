import React, { Component } from 'react';
import { Poster } from './Movie';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

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
			<MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
				<MovieInfo>
					<Overdrive id={movie.id}>
						<Poster
							src={`${POSTER_PATH}${movie.poster_path}`}
							alt={movie.title}
						/>
					</Overdrive>
					<div>
						<h2>{movie.title}</h2>
						<h3>{movie.release_date}</h3>
						<p>{movie.overview}</p>
					</div>
				</MovieInfo>
			</MovieWrapper>
		);
	}
}

export default MoviesDetail;

const MovieWrapper = styled.div`
	position: relative;
	padding-top: 70vh;
	background: url(${props => props.backdrop}) no-repeat;
	background-size: cover;
	@media (max-width: 600px) {
		background-size: contain;
		padding-top: 30vh;
	}
`;

const MovieInfo = styled.div`
	background: white;
	text-align: left;
	padding: 2rem 10%;
	display: flex;
	@media (max-width: 600px) {
		flex-direction: column;
	}
	> div {
		margin-left: 20px;
	}
	img {
		position: relative;
		top: -5rem;
	}
`;
