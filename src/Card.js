import React, { Component } from 'react';

import {
  Grid,
  Box,
  Card
} from '@material-ui/core';


const CityCard = (props) => {
	return (
    <Card>
      <Box flexGrow={1}>
        <h2>{ props.name }</h2>
        
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
  )
}

export {
	CityCard
}
