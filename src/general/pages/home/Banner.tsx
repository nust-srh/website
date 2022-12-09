import { Container, Grid, Typography } from '@mui/material'
import { doc, onSnapshot } from 'firebase/firestore'
import React from 'react'
import background from '../../../assets/background.jpg'
import president from '../../../assets/president.jpg'
import { db } from '../../../services/firebaseConfig'

const Banner = () => {
    const [remarks, setRemarks] = React.useState<any>()

    React.useEffect(() => {
        const docRef = doc(db, 'Welcome', 'Remarks')
        onSnapshot(docRef, (snapshot) => {
            setRemarks({ ...snapshot.data(), id: snapshot.id })
        })
    })

    return (
        <div style={{ backgroundColor: '#fafafa' }}>
            <div
                style={{
                    backgroundImage: `url(${background})`,
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{ minHeight: '550px', paddingBottom: '40px' }}
                >
                    <Grid
                        container
                        sx={{ paddingTop: '200px', paddingBottom: '20px' }}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography
                            sx={{
                                color: '#fff',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                fontSize: '4.2rem',
                            }}
                        >
                            We are the choice champions!
                        </Typography>
                        <Typography
                            sx={{
                                color: '#fff',
                                fontSize: '1.3rem',
                                fontStyle: 'italic',
                                textAlign: 'center',
                            }}
                        >
                            ...We don't impose it, we choice it out
                        </Typography>
                    </Grid>
                </Container>
            </div>
            <Container
                maxWidth="lg"
                sx={{
                    marginTop: '-50px',
                    marginBottom: '20px',
                    backgroundColor: '#fff',
                    borderRadius: '24px',
                    padding: '20px',
                }}
            >
                <Grid container spacing={3} sx={{ padding: '20px' }}>
                    <Grid item lg={8} md={8} xs={12} sm={12}>
                        <Grid
                            container
                            sx={{ paddingTop: '100px' }}
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#050543',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    padding: '30px',
                                }}
                            >
                                {remarks?.message}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item lg={3.5} md={3.5} xs={12} sm={12}>
                        <img
                            src={remarks?.imageUrl}
                            alt={remarks?.name}
                            style={{
                                height: '250px',
                                width: '250px',
                                borderRadius: '125px',
                            }}
                        />
                        <Typography
                            variant="h6"
                            align="right"
                            sx={{ color: '#050543' }}
                        >
                            {remarks?.name}
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            align="right"
                            sx={{ color: '#050543', fontStyle: 'italic' }}
                        >
                            President
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <br />
        </div>
    )
}

export default Banner
