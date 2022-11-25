import React from 'react';
import { AppBar, Toolbar, CssBaseline, useMediaQuery, useTheme, Box} from '@mui/material';
import { Link } from 'react-router-dom';
import DrawerComponent from './DrawerComponent';

import logo from '../../../assets/logo.png';



const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <AppBar position='static' sx={{ backgroundColor: '#050543' }}>
        <CssBaseline />
        <Toolbar>
          <Box sx={{ flexGrow: 1, cursor: 'pointer' }}>
            <Link to='/'
              style={{
                textDecoration: 'none',
                marginLeft: theme.spacing(10),
              }}
            >
              <img
                src={logo}
                height='45px'
                alt='logo'
              />
            </Link>
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
              <Link to='/alumni'
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  fontSize: '17px',
                  marginLeft: theme.spacing(10),
                }}
              >
                Alumni
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header