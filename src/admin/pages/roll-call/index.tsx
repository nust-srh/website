import React from 'react'
import { Card, Container, Grid, Typography, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const RollCall = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Typography
                    align="center"
                    variant="h5"
                    sx={{ fontWeight: 'bold' }}
                >
                    Peer Educators Roll Call
                </Typography>
                <br />
                <Box
                    textAlign="center"
                    justifyContent="center"
                    sx={{ padding: '20px' }}
                >
                    <Link
                        to="/mambo/roll-call/add"
                        style={{ textDecoration: 'none' }}
                    >
                        <Button
                            variant="outlined"
                            sx={{
                                backgroundColor: '#f36a11',
                                color: '#fff',
                                borderRadius: '10px',
                            }}
                        >
                            Add Recruitment Year
                        </Button>
                    </Link>
                </Box>
                <Grid container padding="30px" spacing={3}>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Link
                            to="/mambo/roll-call/year"
                            style={{ textDecoration: 'none' }}
                        >
                            <Card sx={{ width: '150px' }}>
                                <Box
                                    justifyContent="center"
                                    alignItems="center"
                                    textAlign="center"
                                    display="flex"
                                    height="150px"
                                >
                                    2015
                                </Box>
                            </Card>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default RollCall
