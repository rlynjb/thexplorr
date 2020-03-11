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

import axios from 'axios'

/*
  NOTE:
  data entered from Create UI (manually enter for now)
*/
let data = [
{
	title: "Fun times in Downtown LA",
    note: 'try that bao restaurant joint, not sure where tho',
    location_info: {
      city: 'Los Angeles',
      state: 'California',
      country: 'US'
    },
    day: [
      {
        name: 'OUE City Space',
        price: '$',
        address: '123 Downtown Las Angeles, California 89222',
        note: 'i wanna try glass slide overlooking the city and checkout their garden beer.'
      }
    ],
    night: [
      {
        name: 'Alcatraz Night Tour',
        price: '$',
        address: '123 Downtown Las Angeles, California 89222',
        note: 'might not be available during summer'
      }
    ]
},
{
  title: "Urban Living in Las Vegas",
  note: "I wanna experience urban living in vegas",
  location_info: {
    city: "Las Vegas",
    state: "Nevada",
    country: "US"
  },
}
]


/*
  NOTE:
  data fetched from Google map Searchbox.
  map this data from ui to get lat lng
*/
let geocodeData = [
  {
    place: 'Las Vegas, NV US',
    lat: 36.169941,
    lng: -115.139832
  },
  {
    place: 'Los Angeles, Ca US',
    lat: 34.052235,
    lng: -118.243683
  },
]


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={5}
    defaultCenter={{ lat: 37.090240, lng: -95.712891 }}
  >
    { props.isMarkerShown && <Marker position={{ lat: geocodeData[0].lat, lng: geocodeData[0].lng }} /> }
    { props.isMarkerShown && <Marker position={{ lat: geocodeData[1].lat, lng: geocodeData[1].lng }} /> }
    
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

          {
            data.map(v => <CityCard dataObj={ v }  />)
          }

        </Container>
      </div>
    );
  }
}

export default App;
