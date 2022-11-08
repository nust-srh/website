import React from 'react'
import {
    Card,
    CardMedia,
    Container,
    Grid,
    Typography,
    Button,
} from '@mui/material'

import dummy from '../../../assets/hardfacts.png'

const PresidentInitiatives = () => {
    return (
        <>
            <Container maxWidth="lg" sx={{ marginTop: '20px' }}>
                <Card sx={{ backgroundColor: 'transparent' }}>
                    <Grid
                        container
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item lg={2} md={2} sm={12} xs={12}>
                            <CardMedia
                                component="img"
                                image={dummy}
                                alt="prezo"
                                height="150px"
                            />
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <Typography variant="h6">Article title</Typography>
                            <Typography variant="subtitle2">
                                25 Oct 2022
                            </Typography>
                        </Grid>
                        <Grid item lg={5} md={5} sm={12} xs={12}>
                            <Typography variant="subtitle2">
                                This is a relatively short abstract of what
                                exactly the article will be about
                            </Typography>
                        </Grid>
                        <Grid item lg={2} md={2} sm={12} xs={12}>
                            <Button
                                variant="outlined"
                                sx={{ backgroundColor: 'red', color: '#fff' }}
                            >
                                Delete
                            </Button>
                            <br />
                            <br />
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </>
    )
}

export default PresidentInitiatives
