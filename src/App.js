/* eslint react/destructuring-assignment: 0 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';

const App = () => {
	const style = {
		textDecoration: 'none'
	};

	return (
		<Router>
			<div className='App'>
				<header className='App-header'>
					<Link style={style} to='/'>
						<h1>MovieDB</h1>
					</Link>
				</header>
				<Switch>
					<Route path='/:id' component={MovieDetail} />
					<Route exact path='/' component={MoviesList} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
