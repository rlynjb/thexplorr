import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Container,
  Grid,
  Box,
  Card
} from '@material-ui/core';

import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from 'react-google-maps'

import {
  compose,
  withProps
} from 'recompose'

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644}}
  >
    { props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} /> }
  </GoogleMap>
))

let key = "AIzaSyDzHSlIFpZJPIIjCw_BqfV0esv6JXYdTzc"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>thexplorr - My travel vlog</h2>
        </div>

        <div className="overall-map">
          <MyMapComponent
            isMarkerShown
            googleMapURL={ "https://maps.googleapis.com/maps/api/js?key="+key+"&v=3.exp&libraries=geometry,drawing,places" }
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
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

          <Card>
          <Box flexGrow={1}>
            <h2>Downtown Los Angeles, Cali</h2>

            <Grid container>
              <Grid item xs={8} className="city-map">
                <img src="http://placehold.it/300x150" />
              </Grid>

              <Grid item xs={4} className="city-weather">
                <ul>
                  <li>temperature</li>
                  <li>humidity</li>
                  <li>sunny/gloomy</li>
                </ul>
              </Grid>

	    				<Grid item xs={4} className="city-commute">
	    					<ul>
	    						<li>scooter</li>
	    						<li>subway</li>
	    						<li>uber</li>
	    					</ul>
	    				</Grid>

	    				<Grid item xs={12} className="city-food">
						    Food that city is known for
	    				</Grid>

	    				<Grid item xs={12} className="city-day">
						    Day life - attractions, things to do, etc
	    				</Grid>

	    				<Grid item xs={12} className="city-night">
						    Day night - bar, club, etc
	    				</Grid>
	    			</Grid>
	    		</Box>
          </Card>

        </Container>
      </div>
    );
  }
}

export default App;
