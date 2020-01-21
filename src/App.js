import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CityCard } from './Card';

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

let data = [
	{
		locationName: "Downtown LA, Cali"
	},
	{
		locationName: "Silver Lake, Cali"
	}
]

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

					<CityCard />

        </Container>
      </div>
    );
  }
}

export default App;
