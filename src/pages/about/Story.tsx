import { Container, Grid, Typography } from '@mui/material';
import story1 from '../../assets/story1.jpg';
import story2 from '../../assets/story2.jpg';


function Story() {
  return (
    <Container maxWidth='lg' sx={{ padding: '40px' }}>
      <Grid container spacing={2} display='flex' alignItems='center' justifyContent='center' sx={{ marginBottom: '40px' }}>
        <Grid item lg={6} xs={12}>
          <img
            src={story1}
            alt='the real patriots'
            style={{ height: 'auto', width: '100%' }}
          />
        </Grid>
        <Grid item lg={6} xs={12} sx={{ padding: '40px' }} >
          <Typography variant='h4' align='center' sx={{ color: '#f36a11' }}>
            Our Story
          </Typography>
          <Typography variant='subtitle1' align='center' sx={{ color: '#050543' }}>
            From the dusty grounds and asphalt-tarred potholed urban roads,
            we've converged with the unity of purpose and the sole goal of reminiscing the good old chikweshe.
            As age, responsibilities, work and life no longer permit us to physically enjoy,
            we've decided to play it all out here, in hidden spaces. 
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} display='flex' alignItems='center' justifyContent='center' >
        <Grid item lg={6} xs={12} sx={{ padding: '40px' }} >
          <Typography variant='h4' align='center' sx={{ color: '#f36a11' }}>
            The Strength of our Conviction
          </Typography>
          <Typography variant='subtitle1' align='center' sx={{ color: '#050543' }}>
            This is a very long line that is intended to describe and motivate the reader to believe in the cause.
            It is supposed to be catchy, inspiring, and have the resolve to warm up people from deep within.
            And this line will probably be there to make the paragraph lengthy, but not too wordy.
          </Typography>
        </Grid>
        <Grid item lg={6} xs={12}>
          <img
            src={story2}
            alt='the real patriots'
            style={{ height: 'auto', maxWidth: '100%' }}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Story