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

const PresInitiatives = () => {
    const [initiatives, setInitiatives] = useState<any[]>([])

    useEffect(() => {
        const q = query(collection(db, 'Initiatives'))
        const unsub = onSnapshot(q, (querySnapshot) => {
            let initiativesArray: any[] = []
            querySnapshot.forEach((doc) => {
                initiativesArray.push({ ...doc.data(), id: doc.id })
            })
            setInitiatives(initiativesArray)
        })
        return () => unsub()
    }, [])

    const handleDelete = async (id: string) => {
        await deleteDoc(doc(db, 'Initiatives', id))
    }

    return (
        <div>
            <Container
                maxWidth="lg"
                style={{ marginTop: '20px', marginBottom: '20px' }}
            >
                <br />
                <Grid container spacing={3} alignItems="center">
                    {initiatives.map((initiative) => (
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
                                            image={initiative?.imageUrl}
                                            alt={initiative?.title}
                                            height="150px"
                                        />
                                    </Grid>
                                    <Grid item lg={3} md={3} sm={12} xs={12}>
                                        <Typography variant="h6">
                                            {initiative?.title}
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            {initiative?.duration}
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={5} md={5} sm={12} xs={12}>
                                        <Typography variant="subtitle2">
                                            {initiative?.description}
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
                                                handleDelete(initiative?.id)
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

export default PresInitiatives
