import React, { Component } from 'react';

import {
  Grid,
  Box,
  Card
} from '@material-ui/core';


const CityCard = ({ dataObj }) => {
	return (
    <Card>
      <Box p={4} mb={5} flexGrow={1} textAlign="left">
        <h2 className="no-margin">{ dataObj.title }</h2>
        <h6 className="no-margin">{ dataObj.location_info.city + ', ' + dataObj.location_info.state }</h6>


        <Grid container>
          youtube links vids?
        </Grid>


        <Grid container>
          <Grid item xs={6} className="city-weather">
            <ul>
              <li>temperature</li>
              <li>humidity</li>
              <li>sunny/gloomy</li>
            </ul>
          </Grid>

          <Grid item xs={6} className="city-commute">
            <ul>
              <li>scooter</li>
              <li>subway</li>
              <li>uber</li>
            </ul>
          </Grid>

          <Grid item xs={12} className="note">
            Note
            <p>
              { dataObj.note }
            </p>
          </Grid>

          <Grid item xs={12} md={6}>
            <h6>Day stuff</h6>
            <Grid container className="city-day">
              {
                dataObj.day.map(v =>
                  <Grid item xs={12}>
                    <b>{ v.name }</b>
                    <p>{ v.address }</p>
                    <p>{ v.note }</p>
                  </Grid>
                )
              }
            </Grid>
          </Grid>


          <Grid item xs={12} md={6}>
            <h6>Night stuff</h6>
            <Grid container className="city-night">
              {
                dataObj.night.map(v =>
                  <Grid item xs={12}>
                    <b>{ v.name }</b>
                    <p>{ v.address }</p>
                    <p>{ v.note }</p>
                  </Grid>
                )
              }
            </Grid>
          </Grid>
        </Grid>

      </Box>
    </Card>
  )
}

export {
	CityCard
}
