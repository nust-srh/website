import { Container, Grid, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { FacebookOutlined, Twitter } from '@mui/icons-material';

import React from 'react'


const Footer = () => {
  return (
    <div style={{ backgroundColor: '#050543' }}>
      <Container sx={{ padding: '20px' }}>
        <Typography sx={{ color: '#fff', fontSize: '2.1rem', fontWeight: 'bold' }} align='center'>
          Quick Links
        </Typography>
        <Grid container spacing={3} justifyContent='center' >
          <Grid item lg={4} xs={12}>
            <Typography sx={{ color: '#fff', fontSize: '1.3rem', fontStyle: 'italic' }} align='center'>
              Current Peer Educators
            </Typography>
            <br />
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Link to='/about' target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }}>
                  <Typography variant='subtitle1' sx={{ color: '#fff5f1', textAlign: 'center', ':hover': { fontSize: '18px', color: '#f36a11' } }}>
                    About Us
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link to='/blog' target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }}>
                  <Typography variant='subtitle1' sx={{ color: '#fff5f1', textAlign: 'center', ':hover': { fontSize: '18px', color: '#f36a11' } }}>
                    Our Blog
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link to='/' style={{ textDecoration: 'none' }}>
                  <Typography variant='subtitle1' sx={{ color: '#fff5f1', textAlign: 'center', ':hover': { fontSize: '18px', color: '#f36a11' } }}>
                    Join Us
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Typography sx={{ color: '#fff', fontSize: '1.3rem', fontStyle: 'italic' }} align='center'>
              Professional Help
            </Typography>

            <br />
            <Typography variant='subtitle1' sx={{ textAlign: 'center', ':hover': { fontSize: '18px', color: '#f36a11' } }}>
              <a style={{ color: '#fff', textDecoration: 'none' }} target='_blank' rel='noreferrer' href='https://nust.ac.zw'>NUST</a>
            </Typography>
            <Typography variant='subtitle1' sx={{ textAlign: 'center', ':hover': { fontSize: '18px', color: '#f36a11' } }}>
              <a style={{ color: '#fff', textDecoration: 'none' }} target='_blank' rel='noreferrer' href='https://saywhat.org'>SAYWHAT</a>
            </Typography>
            <Typography variant='subtitle1' sx={{ textAlign: 'center', ':hover': { fontSize: '18px', color: '#f36a11' } }}>
              <a style={{ color: '#fff', textDecoration: 'none' }} target='_blank' rel='noreferrer' href='https://friendshipbench.org'>Friendship Bench</a>
            </Typography>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Typography sx={{ color: '#fff', fontSize: '1.3rem', fontStyle: 'italic' }} align='center'>
              Peer Educators Alumni
            </Typography>
            <br />
            <Grid container spacing={1} justifyContent='left' sx={{ marginBottom: '20px' }}>
              <Grid item xs={12}>
                <Link to='/president' target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }}>
                  <Typography variant='subtitle1' sx={{ color: '#fff5f1', textAlign: 'center', ':hover': { fontSize: '18px', color: '#f36a11' } }}>
                    President's Corner
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link to='/' target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }}>
                  <Typography variant='subtitle1' sx={{ color: '#fff5f1', textAlign: 'center', ':hover': { fontSize: '18px', color: '#f36a11' } }}>
                    Fundraisers
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link to='/' style={{ textDecoration: 'none' }}>
                  <Typography variant='subtitle1' sx={{ color: '#fff5f1', textAlign: 'center', ':hover': { fontSize: '18px', color: '#f36a11' } }}>
                    Alumni Network
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div style={{ backgroundColor: '#d3d3d3' }}>
        <Container >
          <Grid container spacing={3} direction='row' alignItems='center' justifyContent='center'  >
            <Grid item lg={6} md={6} sm={12} xs={12} >
              <Typography variant='subtitle2' sx={{ color: '#333333' }}>
                The Choice Champions © {new Date().getFullYear()}. All right reserved.  <a style={{ color: '#333333' }} target='_blank' rel='noreferrer' href='https://rusero.co.zw'>SiDesigned</a>
              </Typography>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} display='flex' flexDirection='row-reverse'>
              <Box>
                <Grid container spacing={1} direction='row' justifyContent='center' display='flex'>
                  <Grid item flex={1}>
                    <a target='_blank' rel='noreferrer' href='https://rusero.co.zw'>
                      <FacebookOutlined
                        sx={{
                          textAlign: 'center',
                          display: 'flex',
                          color: '#4267B2',
                          fontSize: '35px',
                          ':hover': {
                            fontSize: '40px'
                          }
                        }}
                      />
                    </a>
                  </Grid>
                  <Grid item flex={1}>
                    <a style={{ color: '#050543' }} target='_blank' rel='noreferrer' href='https://rusero.co.zw'>
                      <Twitter
                        sx={{
                          textAlign: 'center',
                          display: 'flex',
                          color: '#00c6ff',
                          fontSize: '35px',
                          ':hover': {
                            fontSize: '40px'
                          }
                        }}
                      />
                    </a>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <br />
      </div>
    </div>
  )
}

export default Footer