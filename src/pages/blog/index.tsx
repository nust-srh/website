import React from 'react';
import banner from '../../assets/banner.jpg';
import compassion from '../../assets/compassion.jpg';
import { Card, Container, Grid, Typography, Box, CardMedia, CardContent, Button } from '@mui/material';

const Blog = () => {
  return (
    <div style ={{background: '#fafafa'}}>
      <img
        src={banner}
        width='100%'
        height='250px'
        alt='banner'
      />
      <br />
      <Container maxWidth='lg'>
        <Typography align='center' gutterBottom sx={{ fontSize: '2.3rem', fontStyle: 'italic', fontWeight: 'bold', marginBottom: '0px' }}>
          The Choice Champions' Blog
        </Typography>
        <Typography align='right' variant='subtitle2' gutterBottom sx={{ fontStyle: 'italic' }}>
          NB: views shared do not necessarily represent the organisation's positions
        </Typography>
      </Container>
      <Grid container padding='30px' spacing={3}>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Card sx={{ height: '270px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <CardMedia
                component="img"
                sx={{ width: '150px', height: '150px' }}
                image={compassion}
                alt="Live from space album cover"
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h6" sx={{ fontWeight: 'bold' }}>
                    Great Article Title
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" component="div">
                    Author Name
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                  <Typography variant='subtitle2' align='center'>
                    This is a very simple and abstract that will get the reader geared
                    for the story
                  </Typography>
                </Box>
              </Box>
            </Box>
            <br/>
            <Box textAlign='center'>
              <Button type='submit'
                variant='contained'
                style={{
                  backgroundColor: '#f36a11',
                  color: '#e1e1e1',
                  fontSize: '14px',
                  borderRadius: 10,
                }}
              >
                Continue Reading
              </Button>
            </Box>
          </Card>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Card sx={{ height: '270px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <CardMedia
                component="img"
                sx={{ width: '150px', height: '150px' }}
                image={compassion}
                alt="Live from space album cover"
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h6" sx={{ fontWeight: 'bold' }}>
                    Great Article Title
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" component="div">
                    Author Name
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                  <Typography variant='subtitle2' align='center'>
                    This is a very simple and abstract that will get the reader geared
                    for the story
                  </Typography>
                </Box>
              </Box>
            </Box>
            <br/>
            <Box textAlign='center'>
              <Button type='submit'
                variant='contained'
                style={{
                  backgroundColor: '#f36a11',
                  color: '#e1e1e1',
                  fontSize: '14px',
                  borderRadius: 10,
                }}
              >
                Continue Reading
              </Button>
            </Box>
          </Card>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Card sx={{ height: '270px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <CardMedia
                component="img"
                sx={{ width: '150px', height: '150px' }}
                image={compassion}
                alt="Live from space album cover"
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h6" sx={{ fontWeight: 'bold' }}>
                    Great Article Title
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" component="div">
                    Author Name
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                  <Typography variant='subtitle2' align='center'>
                    This is a very simple and abstract that will get the reader geared
                    for the story
                  </Typography>
                </Box>
              </Box>
            </Box>
            <br/>
            <Box textAlign='center'>
              <Button type='submit'
                variant='contained'
                style={{
                  backgroundColor: '#f36a11',
                  color: '#e1e1e1',
                  fontSize: '14px',
                  borderRadius: 10,
                }}
              >
                Continue Reading
              </Button>
            </Box>
          </Card>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Card sx={{ height: '270px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <CardMedia
                component="img"
                sx={{ width: '150px', height: '150px' }}
                image={compassion}
                alt="Live from space album cover"
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h6" sx={{ fontWeight: 'bold' }}>
                    Great Article Title
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" component="div">
                    Author Name
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                  <Typography variant='subtitle2' align='center'>
                    This is a very simple and abstract that will get the reader geared
                    for the story
                  </Typography>
                </Box>
              </Box>
            </Box>
            <br/>
            <Box textAlign='center'>
              <Button type='submit'
                variant='contained'
                style={{
                  backgroundColor: '#f36a11',
                  color: '#e1e1e1',
                  fontSize: '14px',
                  borderRadius: 10,
                }}
              >
                Continue Reading
              </Button>
            </Box>
          </Card>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Card sx={{ height: '270px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <CardMedia
                component="img"
                sx={{ width: '150px', height: '150px' }}
                image={compassion}
                alt="Live from space album cover"
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h6" sx={{ fontWeight: 'bold' }}>
                    Great Article Title
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" component="div">
                    Author Name
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                  <Typography variant='subtitle2' align='center'>
                    This is a very simple and abstract that will get the reader geared
                    for the story
                  </Typography>
                </Box>
              </Box>
            </Box>
            <br/>
            <Box textAlign='center'>
              <Button type='submit'
                variant='contained'
                style={{
                  backgroundColor: '#f36a11',
                  color: '#e1e1e1',
                  fontSize: '14px',
                  borderRadius: 10,
                }}
              >
                Continue Reading
              </Button>
            </Box>
          </Card>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Card sx={{ height: '270px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <CardMedia
                component="img"
                sx={{ width: '150px', height: '150px' }}
                image={compassion}
                alt="Live from space album cover"
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h6" sx={{ fontWeight: 'bold' }}>
                    Great Article Title
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" component="div">
                    Author Name
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                  <Typography variant='subtitle2' align='center'>
                    This is a very simple and abstract that will get the reader geared
                    for the story
                  </Typography>
                </Box>
              </Box>
            </Box>
            <br/>
            <Box textAlign='center'>
              <Button type='submit'
                variant='contained'
                style={{
                  backgroundColor: '#f36a11',
                  color: '#e1e1e1',
                  fontSize: '14px',
                  borderRadius: 10,
                }}
              >
                Continue Reading
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
      
      <Box textAlign='center' sx={{marginTop: '30px', paddingBottom: '20px '}}>
              <Button type='submit'
                variant='contained'
                style={{
                  backgroundColor: '#050543',
                  color: '#e1e1e1',
                  fontSize: '14px',
                  borderRadius: 10,
                }}
              >
                Load More
              </Button>
            </Box>

    </div>
  )
}

export default Blog
