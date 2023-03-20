import {
    Box,
    Grid,
    Typography,
    Card,
    CardMedia,
    CardContent
} from '@mui/material'
import story1 from '../../../assets/story1.jpg'
import story2 from '../../../assets/story2.jpg'
import story3 from '../../../assets/story3.jpg'

import background from '../../../assets/aboutBanner.jpg'
import React from 'react'

function Story() {
    return (
        <React.Fragment>
            <img
                src={background}
                alt=""
                width='100%'
                style={{
                    objectFit: 'cover',

                }}

            />
            <Typography
                variant="h3"
                align="center"
                sx={{ color: '#f36a11', paddingY: '20px', fontWeight: 'bold' }}
            >
                About Us
            </Typography>
            <Grid
                container
                spacing={3}
                display="flex"
                justifyContent="center"
                sx={{
                    padding: '10px 20px',
                }}
            >
                <Grid item lg={3} md={3} sm={6} xs={12} sx={{ padding: '20px' }}>
                    <Box height='500px'>
                        <Typography
                            align="center"
                            sx={{
                                fontSize: '1.9rem',
                                color: '#f36a11',
                            }}
                        >
                            Our Story
                        </Typography>
                        <br />
                        <Typography
                            variant="subtitle1"
                            align="center"
                            sx={{
                                color: '#050543',
                                textAlign: 'justify'
                            }}
                        >
                            In 2015, a group of students decided to come together
                            and do something about the health of their peers,
                            helping them to make positive choices for themselves and
                            their loved ones. Since then, the movement roared into life
                            and has since been making greater strides to serve!
                        </Typography>
                        <br />
                        <Typography
                            variant="subtitle1"
                            align="center"
                            sx={{
                                color: '#050543',
                                textAlign: 'justify'
                            }}
                        >
                            We are resolute and passionate in our endeavour to ensure that
                            our communities make informed decisions about their health.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={12}>
                    <Box height='500px'>
                        <Typography
                            align="center"
                            sx={{
                                fontSize: '1.9rem',
                                color: '#f36a11',
                            }}
                        >
                            Awareness
                        </Typography>
                        <br />
                        <Card sx={{ boxShadow: 'none' }}>
                            <CardMedia
                                component="img"
                                alt=""
                                height="240"
                                image={story1}
                            />
                            <CardContent sx={{ paddingX: '0px' }}>
                                <Typography
                                    variant="subtitle1"
                                    align="center"
                                    sx={{
                                        color: '#050543',
                                        textAlign: 'justify'
                                    }}
                                >
                                    We raise awareness of the various challenges our peers are
                                    facing and assist them in equipping them with the knowledge of
                                    where to seek help.
                                </Typography>
                            </CardContent>
                        </Card>

                    </Box>

                </Grid>

                <Grid item lg={3} md={3} sm={6} xs={12} sx={{ padding: '20px' }}>
                    <Box height='500px'>
                        <Typography
                            align="center"
                            sx={{
                                fontSize: '1.9rem',
                                color: '#f36a11',
                            }}
                        >
                            Advocacy
                        </Typography>
                        <br />
                        <Card sx={{ boxShadow: 'none' }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="240"
                                image={story2}
                            />
                            <CardContent sx={{ paddingX: '0px' }}>
                                <Typography
                                    variant="subtitle1"
                                    align="center"
                                    sx={{
                                        color: '#050543',
                                        textAlign: 'justify'
                                    }}
                                >
                                    We raise our voices in advocacy for a better society where we
                                    all can get to pursue our dreams in an environment where we
                                    are safe and happy.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={12}>
                    <Box height='500px'>
                        <Typography
                            align="center"
                            sx={{
                                fontSize: '1.9rem',
                                color: '#f36a11',
                            }}
                        >
                            Edutainment
                        </Typography>
                        <br />
                        <Card sx={{ boxShadow: 'none' }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="240"
                                image={story3}
                            />
                           <CardContent sx={{ paddingX: '0px' }}>
                                <Typography
                                    variant="subtitle1"
                                    align="center"
                                    sx={{
                                        color: '#050543',
                                        textAlign: 'justify'
                                    }}
                                >
                                    We intend to inform and educate our peers on all matters that affect them 
                                    in means and methods that they love and can fully decode the information as 
                                    well as share with others.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Story




