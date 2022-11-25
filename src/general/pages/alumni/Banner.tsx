import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import alumniBanner from '../../../assets/alumniBanner.jpg'

const Banner = () => {
    return (
        <div style={{ backgroundColor: '#fafafa' }}>
            <div
                style={{
                    backgroundImage: `url(${alumniBanner})`,
                }}
            >
                <Box sx={{ minHeight: '450px', paddingBottom: '20px', padding: '40px'}}>
                    <Grid
                        container
                        sx={{ paddingTop: '60px' }}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                color: '#fff',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                paddingTop: '150px',
                            }}
                        >
                            We came, we conquered, and we continue to serve!
                        </Typography>
                        <Typography
                            sx={{
                                color: '#fff',
                                fontSize: '1.3rem',
                                fontStyle: 'italic',
                                textAlign: 'center',
                            }}
                        >
                            ...once a peer educator, always a peer educator.
                        </Typography>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default Banner
