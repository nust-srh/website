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
} from 'firebase/firestore'

import { db } from '../../../services/firebaseConfig'
import { Link } from 'react-router-dom'

const AlumniProjects = () => {
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

    return (
        <div style={{ backgroundColor: '#f5f5f5' }}>
            <Container maxWidth="lg" sx={{ padding: '30px' }}>
                <Typography
                    align="center"
                    variant="h4"
                    sx={{ fontWeight: 'bold', color: '#f36a11' }}
                >
                    Alumni Projects
                </Typography>
                <br />
                <Grid container spacing={3} alignItems="center">
                    {initiatives.map((initiative) => (
                        <Grid item lg={12}>
                            <Card
                                sx={{
                                    backgroundColor: '#fff',
                                    padding: '15px',
                                }}
                            >
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
                                        <Link
                                            to={`/alumni/${initiative.id}`}
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

export default AlumniProjects
