import { Container, Grid, Typography } from '@mui/material'
import story1 from '../../../assets/story1.jpg'
import story2 from '../../../assets/story2.jpg'

function Story() {
    return (
        <Container maxWidth="lg" sx={{ padding: '40px' }}>
            <Grid
                container
                spacing={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ marginBottom: '40px' }}
            >
                <Grid item lg={6} xs={12}>
                    <img
                        src={story1}
                        alt="the real patriots"
                        style={{ height: 'auto', width: '100%' }}
                    />
                </Grid>
                <Grid item lg={6} xs={12} sx={{ padding: '40px' }}>
                    <Typography
                        variant="h4"
                        align="center"
                        sx={{ color: '#f36a11' }}
                    >
                        Our Story
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        sx={{ color: '#050543', padding: '0 20px' }}
                    >
                        The genesis of this noble movement can be traced back to
                        2015 when a group of students decided to come together
                        and do something about the health of their peers,
                        helping them to make positive choices for themselves and
                        their loved ones. As a mustard seed sown into the
                        ground, we roared into life and have since been making
                        greater strides to serve!
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                container
                spacing={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Grid item lg={6} xs={12} sx={{ padding: '40px' }}>
                    <Typography
                        variant="h4"
                        align="center"
                        sx={{ color: '#f36a11' }}
                    >
                        The Strength of our Conviction
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        sx={{ color: '#050543', padding: '0 20px'}}
                    >
                        We are resolute and passionate in our endeavour to
                        ensure that our communities make informed decisions
                        about their health and that they have access to the
                        services that they need. We believe that where there is
                        help, there always will be a way!
                    </Typography>
                </Grid>
                <Grid item lg={6} xs={12}>
                    <img
                        src={story2}
                        alt="the real patriots"
                        style={{ height: 'auto', maxWidth: '100%' }}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Story
