import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import { Grid } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Container, Button } from '@mui/material'
import { collection, query, onSnapshot } from 'firebase/firestore'

import { db } from '../../../services/firebaseConfig'
import { Link } from 'react-router-dom'

const Calendar = () => {
    const [events, setEvents] = useState<any[]>([])

    useEffect(() => {
        const q = query(collection(db, 'Events'))
        const unsub = onSnapshot(q, (querySnapshot) => {
            let eventsArray: any[] = []
            querySnapshot.forEach((doc) => {
                eventsArray.push({ ...doc.data(), id: doc.id })
            })
            setEvents(eventsArray)
        })
        return () => unsub()
    }, [])

    return (
        <div style={{ background: '#fafafa' }}>
            <Container
                maxWidth="lg"
                style={{ paddingTop: '20px', paddingBottom: '50px' }}
            >
                <Typography
                    align="center"
                    variant="h4"
                    sx={{
                        fontWeight: 'bold',
                        paddingTop: '20px',
                        color: '#f36a11',
                    }}
                >
                    Semester Calendar
                </Typography>
                <br />
                <Grid
                    container
                    spacing={3}
                    alignItems="center"
                    sx={{ padding: '10px' }}
                >
                    {events.map((event) => (
                        <Grid item lg={12} key={event?.id}>
                            <Card sx={{ backgroundColor: '#fff' }}>
                                <Grid
                                    container
                                    spacing={2}
                                    justifyContent="center"
                                    alignItems="center"
                                    sx={{ padding: '20px' }}
                                >
                                    <Grid item lg={2} md={2} sm={12} xs={12}>
                                        <CardMedia
                                            component="img"
                                            image={event?.imageUrl}
                                            alt={event?.title}
                                            height="150px"
                                            sx={{ maxWidth: '200px' }}
                                        />
                                    </Grid>
                                    <Grid item lg={3} md={3} sm={12} xs={12}>
                                        <Typography variant="h6">
                                            {event?.title}
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            {event?.duration}
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={5} md={5} sm={12} xs={12}>
                                        <Typography variant="subtitle2">
                                            {event?.description}
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={2} md={2} sm={12} xs={12}>
                                        <Link
                                            to={`/events/${event.id}`}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <Button
                                                type="submit"
                                                variant="outlined"
                                                style={{
                                                    backgroundColor: '#f36a11',
                                                    color: '#e1e1e1',
                                                    fontSize: '14px',
                                                    borderRadius: 10,
                                                }}
                                            >
                                                Read More
                                            </Button>
                                        </Link>
                                        <br />
                                        <br />
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default Calendar
