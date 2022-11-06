import React from 'react';
import { Card, CardMedia, Container, Grid, Typography, Box, CardActions, Button, CardContent } from '@mui/material'

import dummy from '../../../assets/hardfacts.png';

const Presidents = () => {
  return (
    <div>
      <Container maxWidth='lg'>
        <Typography align='center' variant='h5' sx={{ fontWeight: 'bold' }}>
          Presidents
        </Typography>
        <br />
        <Box textAlign='center' justifyContent='center' sx={{ padding: '20px' }}>
          <Button variant='outlined' sx={{ backgroundColor: '#f36a11', color: '#fff', borderRadius: '10px' }}>
            Add President
          </Button>
        </Box>
        <Grid container spacing={3} justifyContent='center'>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Card>
              <CardMedia
                component='img'
                image={dummy}
                alt='prezo'
                height='200px'
              />
              <CardContent>
                <Typography align='center' variant='h5'>
                  Silas Mavende
                </Typography>
                <Typography align='center' variant='subtitle2'>
                  2021
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button variant='outlined' sx={{ backgroundColor: '#f36a11', color: '#fff' }}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Card>
              <CardMedia
                component='img'
                image={dummy}
                alt='prezo'
                height='200px'
              />
              <CardContent>
                <Typography align='center' variant='h5'>
                  Sean Timba
                </Typography>
                <Typography align='center' variant='subtitle2'>
                  2020
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button variant='outlined' sx={{ backgroundColor: '#f36a11', color: '#fff' }}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Card>
              <CardMedia
                component='img'
                image={dummy}
                alt='prezo'
                height='200px'
              />
              <CardContent>
                <Typography align='center' variant='h5'>
                  Silas Mavende
                </Typography>
                <Typography align='center' variant='subtitle2'>
                  2019
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button variant='outlined' sx={{ backgroundColor: '#f36a11', color: '#fff' }}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Card>
              <CardMedia
                component='img'
                image={dummy}
                alt='prezo'
                height='200px'
              />
              <CardContent>
                <Typography align='center' variant='h5'>
                  Silas Mavende
                </Typography>
                <Typography align='center' variant='subtitle2'>
                  2018
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button variant='outlined' sx={{ backgroundColor: '#f36a11', color: '#fff' }}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Card>
              <CardMedia
                component='img'
                image={dummy}
                alt='prezo'
                height='200px'
              />
              <CardContent>
                <Typography align='center' variant='h5'>
                  Silas Mavende
                </Typography>
                <Typography align='center' variant='subtitle2'>
                  2017
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button variant='outlined' sx={{ backgroundColor: '#f36a11', color: '#fff' }}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Card>
              <CardMedia
                component='img'
                image={dummy}
                alt='prezo'
                height='200px'
              />
              <CardContent>
                <Typography align='center' variant='h5'>
                  Sean Timba
                </Typography>
                <Typography align='center' variant='subtitle2'>
                  2016
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button variant='outlined' sx={{ backgroundColor: '#f36a11', color: '#fff' }}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Card>
              <CardMedia
                component='img'
                image={dummy}
                alt='prezo'
                height='200px'
              />
              <CardContent>
                <Typography align='center' variant='h5'>
                  Silas Mavende
                </Typography>
                <Typography align='center' variant='subtitle2'>
                  2015
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button variant='outlined' sx={{ backgroundColor: '#f36a11', color: '#fff' }}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Presidents



