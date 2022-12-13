import React, { useState } from 'react';
import { Grid, TextField, Container, Button, Card, CardContent, Box, Typography } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../services/firebaseConfig';
import { styled } from '@mui/material/styles';

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);





function Hero() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoader(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/mambo/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth='lg' sx={{ textAlign: 'center', padding: '80px 0' }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent='center'
        alignItems='center'
        container
      >
        <Grid item md={10} lg={8} mx='auto'>
          <TypographyH1 sx={{ mb: 2 }} variant='h1'>
            Ngena jeki
          </TypographyH1>
          <Grid container justifyContent='center'>
            <Card style={{ maxWidth: 450, boxShadow: 'none' }}>
              <CardContent>
                {error && <span style={{ marginTop: '15px', color: 'red', fontSize: '20px' }}>Incorrect email/password! </span>}
                <form onSubmit={handleLogin}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <TextField
                        type='email'
                        placeholder='Enter email'
                        label='Email'
                        name='email'
                        variant='outlined'
                        fullWidth
                        /*required*/
                        onChange={e => setEmail(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type='password'
                        placeholder='Password'
                        label='Password'
                        name='password'
                        variant='outlined'
                        fullWidth
                        /*required*/
                        onChange={e => setPassword(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Box textAlign='center'>
                        <Button type='submit'
                          variant='contained'
                          style={{
                            backgroundColor: loader ? '#ccc' : '#f36a11',
                            color: '#e1e1e1',
                            fontSize: '14px',
                            borderRadius: 10,
                          }}
                        >
                          Login
                        </Button>
                      </Box>
                    </Grid>
                    <br />
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
