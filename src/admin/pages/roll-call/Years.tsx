import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import { Box, Grid } from '@mui/material'
import { Container, Button } from '@mui/material'
import {
    collection,
    query,
    onSnapshot,
    deleteDoc,
    doc,
} from 'firebase/firestore'

import { db } from '../../../services/firebaseConfig'
import { Link } from 'react-router-dom'

const Years = () => {
    const [years, setYears] = useState<any[]>([])

    useEffect(() => {
        const q = query(collection(db, 'RollCall'))
        const unsub = onSnapshot(q, (querySnapshot) => {
            let yearsArray: any[] = []
            querySnapshot.forEach((doc) => {
                yearsArray.push({ ...doc.data(), id: doc.id })
            })
            setYears(yearsArray)
        })
        return () => unsub()
    }, [])

    const handleDelete = async (id: string) => {
        await deleteDoc(doc(db, 'RollCall', id))
    }

    console.log(years);

    return (
        <div>
            <Container
                maxWidth="lg"
                style={{ marginTop: '20px', marginBottom: '20px' }}
            >
                <br />
                <Grid container spacing={3} alignItems="center">
                    {years.map((year) => (
                        <Grid item lg={2.5} md={3} sm={6} xs={12}>
                            <Card sx={{ width: '150px', height: '150px' }}>
                                <Link
                                    to={`/mambo/roll-call/${year?.year}`}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Box
                                        justifyContent="center"
                                        alignItems="center"
                                        textAlign="center"
                                        display="flex"
                                        height="100px"
                                    >
                                        {year?.year}
                                    </Box>
                                </Link>
                                <Box
                                    justifyContent="center"
                                    alignItems="center"
                                    textAlign="center"
                                >
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            backgroundColor: 'red',
                                            color: '#fff',
                                        }}
                                        onClick={() => handleDelete(year?.id)}
                                    >
                                        Delete
                                    </Button>
                                </Box>
                            </Card>
                            <br />
                            <br />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default Years
