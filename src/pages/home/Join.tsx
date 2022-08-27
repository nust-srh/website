import { Container, Grid, Typography, TextField, Box, Button } from '@mui/material'
import React from 'react'
import dummy from '../../assets/dummy.jpg'

const Join = () => {
  return (
    <div style={{padding: '25px' }}>
      <Container maxWidth='md'>
        <Grid container spacing={2} justifyContent='space-evenly' alignItems='center'>
          <Grid item xs={12} lg={6}>
            <img
              src={dummy}
              alt='join us'
              style={{ height: 'auto', width: '100%' }}
            />
          </Grid>
          <Grid item xs={12} lg={6} >
            <Typography variant='h6' sx={{ color: '#050543', fontWeight: 'bold' }} align='center'>
              Join Us Today
            </Typography>
            <Typography variant='subtitle1' sx={{ color: '#050543' }} align='center'>
              We are the best and the coolest student society in the country. You too can become a part of us
            </Typography>
            <br />
            <br />
            <Typography variant='subtitle2' sx={{ color: '#050543' }} align='center'>
              Fill in your details and we will get back to you.
            </Typography>
            <br />
            <form>
              <Grid container spacing={0.5} style={{ backgroundColor: 'transparent', paddingRight: '50px', paddingLeft: '30px' }}>
                <Grid xs={12} sm={12} item>
                  <TextField
                    placeholder='Name'
                    label='Name'
                    name='name'
                    variant='outlined'
                    fullWidth required
                    inputProps={{
                      style: {
                        color: '#050543',
                      }
                    }}
                    InputLabelProps={{
                      style: {
                        color: '#f36a11',
                      }
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#f36a11',
                        borderWidth: '1px'
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type='email'
                    placeholder='Enter email'
                    label='Email'
                    name='email'
                    variant='outlined'
                    fullWidth required
                    inputProps={{
                      style: {
                        color: '#050543',
                      }
                    }}
                    InputLabelProps={{
                      style: {
                        color: '#f36a11',
                      }
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#f36a11',
                        borderWidth: '1px'
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    placeholder='your Program'
                    label='Program'
                    name='program'
                    variant='outlined'
                    fullWidth required
                    inputProps={{
                      style: {
                        color: '#050543',
                      }
                    }}
                    InputLabelProps={{
                      style: {
                        color: '#f36a11',
                      }
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#f36a11',
                        borderWidth: '1px'
                      }
                    }}
                  />
                </Grid>
                * to add MUI phone input right here
                <Grid item xs={12}>
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
                      Submit
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Join