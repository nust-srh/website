import { doc, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../../services/firebaseConfig'
import {
    Container,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
} from '@mui/material'
import './event.css'
import { Helmet } from 'react-helmet-async'

const Event = () => {
    const { id } = useParams()
    const [event, setEvent] = useState<any>()

    useEffect(() => {
        const docRef = doc(db, 'Initiatives', id ? id : 'baba')
        onSnapshot(docRef, (snapshot) => {
            setEvent({ ...snapshot.data(), id: snapshot.id })
        })
    })

    return (
        <div style={{ minHeight: '60vh' }}>
            <Container maxWidth="md" sx={{ padding: '20px' }}>
            <Helmet>
                <title>{`${event?.title}`} | Choice Champions</title>
                <meta
                    name="description"
                    content={event?.description}
                />
                <meta name="keywords" content="Nust Choice Champions, Peer Educators, Zimbabwe, NUST, health, Choice Champions"/>
            </Helmet>
                {event && (
                    <Grid
                        container
                        spacing={3}
                        alignItems="center"
                        style={{ marginBottom: '20px' }}
                    >
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Card
                                style={{
                                    border: 'none',
                                    boxShadow: 'none',
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h4"
                                        component="div"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: '#f36a11',
                                        }}
                                    >
                                        {event?.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {event?.description}
                                    </Typography>
                                </CardContent>
                                <CardMedia
                                    component="img"
                                    height="450"
                                    image={event?.imageUrl}
                                    alt={event?.title}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Box sx={{ minWidth: 275 }}>
                                <Card
                                    style={{
                                        border: 'none',
                                        boxShadow: 'none',
                                    }}
                                >
                                    <CardContent>
                                        <br />
                                        <br />
                                        <Typography
                                            sx={{ fontSize: 14 }}
                                            color="text.secondary"
                                            gutterBottom
                                        >
                                            Duration: {event?.duration}
                                        </Typography>
                                        <Typography
                                            sx={{ mb: 1.5 }}
                                            color="text.secondary"
                                        >
                                            Partners: {event?.partners}
                                        </Typography>
                                        <br />
                                        <Typography
                                            variant="h6"
                                            sx={{ color: '#f36a11' }}
                                        >
                                            Details:
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            className="body"
                                        >
                                            {event?.details}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>
                )}
                <br />
            </Container>
        </div>
    )
}

export default Event
