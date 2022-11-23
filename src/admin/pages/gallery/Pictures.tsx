import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
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

type IPicture = {
    id: string
    imageUrl: string
    abstract: string
}

const Pictures = () => {
    const [Pictures, setPictures] = useState<IPicture[]>([])

    useEffect(() => {
        const q = query(collection(db, 'Pictures'))
        const unsub = onSnapshot(q, (querySnapshot) => {
            let PicturesArray: any = []
            querySnapshot.forEach((doc) => {
                PicturesArray.push({ ...doc.data(), id: doc.id })
            })
            setPictures(PicturesArray)
        })
        return () => unsub()
    }, [])

    const handleDelete = async (id: string) => {
        await deleteDoc(doc(db, 'Pictures', id))
    }

    return (
        <div>
            <Container
                maxWidth="lg"
                style={{ marginTop: '20px', marginBottom: '20px' }}
            >
                <Grid container spacing={3} alignItems="center">
                    {Pictures.map((Picture) => (
                        <Grid item lg={12}>
                            <Card sx={{ display: 'flex' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{ height: '300px', width: '450px' }}
                                        image={Picture?.imageUrl}
                                        alt={Picture?.abstract}
                                    />
                                </Box>
                                <Box
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <CardContent
                                        sx={{
                                            flex: '1 0 auto',
                                            paddingLeft: '30px',
                                        }}
                                    >
                                        <Typography
                                            variant="subtitle1"
                                            color="text.secondary"
                                            component="div"
                                            align="center"
                                        >
                                            {Picture?.abstract}
                                        </Typography>
                                    </CardContent>
                                    <br />
                                    <Box textAlign="center">
                                        <Button
                                            variant="outlined"
                                            style={{
                                                color: '#FFF',
                                                backgroundColor: 'red',
                                            }}
                                            onClick={() =>
                                                handleDelete(Picture?.id)
                                            }
                                        >
                                            Delete Picture
                                        </Button>
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default Pictures
