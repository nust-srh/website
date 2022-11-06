import { Handshake, Diversity1, MilitaryTech, Lock } from '@mui/icons-material';
import { Box, Container, Grid, Typography } from '@mui/material';

function Objectives() {
  return (
    <div>
      <Container maxWidth='sm'>
        <Typography align='center' sx={{ fontSize: '1.9rem', color: '#f36a11', fontWeight: 'bold' }}>
          Our Purpose
        </Typography>
        <br />
        <Typography align='center' variant='h6' sx={{ color: '#050543' }}>
          We promote health-enhancing behavior change in young students by providing 
          suggestions to pressing health and social problems so that people live healthier, 
          happier and more productive lives.
        </Typography>
      </Container>
      <Container maxWidth='lg' sx={{ marginTop: '40px' }}>
        <Typography align='center' sx={{ fontSize: '1.9rem', color: '#f36a11', fontWeight: 'bold' }}>
          Our Core Values
        </Typography>
        <Grid container spacing={5} justifyContent='space-evenly'>
          <Grid item lg={3} md={3} xs={12}>
            <Box alignItems='center' display='flex' flexDirection='column'>
              <Box>
                <Handshake
                  sx={{
                    color: '#f36a11',
                    fontSize: '150px',
                  }}
                />
              </Box>
              <Box>
                <Typography align='center' variant='h6' sx={{ color: '#050543' }}>
                  Integrity
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} xs={12}>
            <Box alignItems='center' display='flex' flexDirection='column'>
              <Box>
                <Diversity1
                  sx={{
                    color: '#f36a11',
                    fontSize: '150px',
                  }}
                />
              </Box>
              <Box>
                <Typography align='center' variant='h6' sx={{ color: '#050543' }}>
                  Inclusivity
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} xs={12}>
            <Box alignItems='center' display='flex' flexDirection='column'>
              <Box>
                <MilitaryTech
                  sx={{
                    color: '#f36a11',
                    fontSize: '150px',
                  }}
                />
              </Box>
              <Box>
                <Typography align='center' variant='h6' sx={{ color: '#050543' }}>
                  Excellence
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} xs={12}>
            <Box alignItems='center' display='flex' flexDirection='column'>
              <Box>
                <Lock
                  sx={{
                    color: '#f36a11',
                    fontSize: '150px',
                  }}
                />
              </Box>
              <Box>
                <Typography align='center' variant='h6' sx={{ color: '#050543' }}>
                  Confidentiality
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Objectives