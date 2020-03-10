import React, { Component } from 'react';

import {
  Grid,
  Box,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  Typography
} from '@material-ui/core';


const CityCard = ({ dataObj }) => {
	return (
    <Card variant="outlined">
      <Box textAlign="left">
        <CardHeader
          title={ dataObj.title }
          subheader={ dataObj.location_info.city + ', ' + dataObj.location_info.state }
        />
      </Box>

      <CardContent>
        <Box flexGrow={1} textAlign="left">
          <Grid container>
            <Grid item xs={4}>
              <img src="http://placehold.it/250x140" />
            </Grid>
            <Grid item xs={4}>
              <img src="http://placehold.it/250x140" />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} className="note">
              <Box mt={4} mb={4}>
                <Typography variant="subtitle2">
                  Visited on Feb. 28, 2020 from March 3, 2020
                </Typography>

                <Typography variant="body1">
                  { dataObj.note }
                </Typography>
              </Box>
            </Grid>


            { if (data.Obj.day) { }
            <Grid item xs={12} md={6}>
              <Box mb={2}>
                <Typography variant="h6">
                  Day stuff
                </Typography>

                <Grid container className="city-day">
                  { dataObj.day.map(v =>
                    <Grid item xs={12}>
                      <Typography variant="subtitle1">
                        { v.name } | { v.price }
                      </Typography>

                      <Typography variant="caption" gutterBottom>
                        { v.address }
                      </Typography>

                      <Typography variant="body1">
                        { v.note }
                      </Typography>
                    </Grid>
                  ) }
                </Grid>
              </Box>
            </Grid>
            { } }


            <Grid item xs={12} md={6}>
              <Typography variant="h6">
                Night stuff
              </Typography>

              <Grid container className="city-night">
                { dataObj.night.map(v =>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1">
                      { v.name } | { v.price }
                    </Typography>

                    <Typography variant="caption" gutterBottom>
                      { v.address }
                    </Typography>

                    <Typography variant="body1">
                      { v.note }
                    </Typography>
                  </Grid>
                ) }
              </Grid>
            </Grid>
          </Grid>

        </Box>
      </CardContent>
    </Card>
  )
}

export {
	CityCard
}
