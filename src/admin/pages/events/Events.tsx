import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import { Grid } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Container, Button } from '@mui/material'
import {
    collection,
    query,
    onSnapshot,
    deleteDoc,
    doc,
} from 'firebase/firestore'

import { db } from '../../../services/firebaseConfig'

const Events = () => {
    const [events, setEvents] = useState<any[]>([])

    useEffect(() => {
        const q = query(collection(db, 'Events'))
        const unsub = onSnapshot(q, (querySnapshot) => {
            let skyeventsArray: any[] = []
            querySnapshot.forEach((doc) => {
                skyeventsArray.push({ ...doc.data(), id: doc.id })
            })
            setEvents(skyeventsArray)
        })
        return () => unsub()
    }, [])

    const handleDelete = async (id: string) => {
        await deleteDoc(doc(db, 'skyevents', id))
    }

    return (
        <div>
            <Container
                maxWidth="lg"
                style={{ marginTop: '20px', marginBottom: '20px' }}
            >
                <br />
                <Grid container spacing={3} alignItems="center">
                    {events.map((event) => (
                        <Grid item lg={12}>
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
                                            image={event?.imageUrl}
                                            alt={event?.title}
                                            height="150px"
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
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                backgroundColor: 'red',
                                                color: '#fff',
                                            }}
                                            onClick={() =>
                                                handleDelete(event?.id)
                                            }
                                        >
                                            Delete
                                        </Button>
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

export default Events
