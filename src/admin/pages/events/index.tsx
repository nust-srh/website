import React from 'react';
import { Card, CardMedia, Container, Grid, Typography, Box, CardActions, Button, CardContent } from '@mui/material';

import dummy from '../../../assets/hardfacts.png';

const Calendar = () => {
  return (
    <>
      <Container maxWidth='lg'>
        <Typography align='center' variant='h5' sx={{ fontWeight: 'bold' }}>
          Semester Calendar
        </Typography>
        <br />
        <Box textAlign='center' justifyContent='center' sx={{ padding: '20px' }}>
          <Button variant='outlined' sx={{ backgroundColor: '#f36a11', color: '#fff', borderRadius: '10px' }}>
            Add Event
          </Button>
        </Box>
        <Card sx={{ backgroundColor: 'transparent' }}>
          <Grid container spacing={2} justifyContent='center' alignItems='center'>
            <Grid item lg={2} md={2} sm={12} xs={12}>
              < CardMedia
                component='img'
                image={dummy}
                alt='prezo'
                height='150px'
              />
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <Typography variant='h6'>
                Orange day
              </Typography>
              <Typography variant='subtitle2'>
                25 Oct 2022
              </Typography>
            </Grid>
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <Typography variant='subtitle2'>
                This is a relatively short abstract of what exactly the event will be about
              </Typography>
            </Grid>
            <Grid item lg={2} md={2} sm={12} xs={12}>
              <Button variant='outlined' sx={{ backgroundColor: 'red', color: '#fff' }}>
                Delete
              </Button>
              <br />
              <br />
              <Button variant='text' sx={{ color: '#333' }}>
                Read more
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  )
}

export default Calendar

