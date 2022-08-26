import React from 'react';
import { AppBar, Toolbar, CssBaseline, useMediaQuery, useTheme, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import DrawerComponent from './DrawerComponent';



const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <AppBar position='static' sx={{ backgroundColor: '#050543' }}>
        <CssBaseline />
        <Toolbar>
          <Box sx={{ flexGrow: 1, cursor: 'pointer' }}>
            <Typography variant='h4' sx={{ color: '#fff' }}>Logo here</Typography>
          </Box>
          {isMobile ? (
            <DrawerComponent />
          ) : (
            <div style={{ display: 'flex', justifyContent: 'right', marginRight: '60px' }}>
              <Link to='/'
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  fontSize: '17px',
                  marginLeft: theme.spacing(10),
                }}
              >
                Home
              </Link>
              <Link to='/about'
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  fontSize: '17px',
                  marginLeft: theme.spacing(10),
                }}
              >
                About
              </Link>
              <Link to='/blog'
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  fontSize: '17px',
                  marginLeft: theme.spacing(10),
                }}
              >
                Blog
              </Link>
              <Link to='/presidents'
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  fontSize: '17px',
                  marginLeft: theme.spacing(10),
                }}
              >
                Presidents
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header