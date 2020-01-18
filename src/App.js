import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
	Container,
	Grid
} from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>thexplorr - My travel vlog</h2>
        </div>

	<div className="overall-map">
		<img src="http://placehold.it/500x250" />
	</div>

	    <Container maxWidth="xl">
	    			<Grid container direction="row">
	    				<Grid item s={4} className="transportation">
	    					<ul>
	    						<li>skyscanner</li>
	    						<li>car/gas</li>
	    						<li>bus/metro</li>
	    					</ul>
	    				</Grid>

	    				<Grid item s={4} className="city-accomodation">
	    					<ul>
	    						<li>trivago</li>
	    						<li>airbnb</li>
	    					</ul>
	    				</Grid>
	    			</Grid>


			<Grid container spacing={2}>
				<h2>Downtown Los Angeles, Cali</h2>
				<Grid container direction="row">
					<Grid item s={8} className="city-map">
						<img src="http://placehold.it/300x150" />
	    				</Grid>

	    				<Grid item s={4} className="city-weather">
	    					<ul>
							<li>temperature</li>
	    						<li>humidity</li>
	    						<li>sunny/gloomy</li>
	    					</ul>
	    				</Grid>
	    				<Grid item s={4} className="city-commute">
	    					<ul>
	    						<li>scooter</li>
	    						<li>subway</li>
	    						<li>uber</li>
	    					</ul>
	    				</Grid>

	    				<Grid item={12} className="city-food">
						Food that city is known for
	    				</Grid>

	    				<Grid item={12} className="city-day">
						Day life - attractions, things to do, etc
	    				</Grid>

	    				<Grid item={12} className="city-night">
						Day night - bar, club, etc
	    				</Grid>
	    			</Grid>
	    		</Grid>

	    </Container>

      </div>
    );
  }
}

export default App;
