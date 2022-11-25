import React from 'react'
import {
    Card,
    CardMedia,
    Container,
    Grid,
    Typography,
    Box,
    CardActions,
    Button,
    CardContent,
} from '@mui/material'
import {
    collection,
    query,
    onSnapshot,
    deleteDoc,
    doc,
    orderBy,
} from 'firebase/firestore'
import dummy from '../../../assets/hardfacts.png'
import { Link } from 'react-router-dom'

import { db } from '../../../services/firebaseConfig'

type IPresident = {
    id: string
    imageUrl: string
    name: string
    year: string
}

const Presidents = () => {
    const [Presidents, setPresidents] = React.useState<IPresident[]>([])

    React.useEffect(() => {
        const q = query(collection(db, 'Presidents'), orderBy('year', 'desc'))
        const unsub = onSnapshot(q, (querySnapshot) => {
            let PresidentsArray: any = []
            querySnapshot.forEach((doc) => {
                PresidentsArray.push({ ...doc.data(), id: doc.id })
            })
            setPresidents(PresidentsArray)
        })
        return () => unsub()
    }, [])

    const handleDelete = async (id: string) => {
        await deleteDoc(doc(db, 'Presidents', id))
    }

    return (
        <div>
            <Container maxWidth="lg">
                <Typography
                    align="center"
                    variant="h5"
                    sx={{ fontWeight: 'bold' }}
                >
                    Presidents
                </Typography>
                <br />
                <Link
                    to="/mambo/presidents/add"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: 'none' }}
                >
                    <Box
                        textAlign="center"
                        justifyContent="center"
                        sx={{ padding: '20px' }}
                    >
                        <Button
                            variant="outlined"
                            sx={{
                                backgroundColor: '#f36a11',
                                color: '#fff',
                                borderRadius: '10px',
                            }}
                        >
                            Add President
                        </Button>
                    </Box>
                </Link>
                <Grid container spacing={3} justifyContent="center">
                    {Presidents.map((president) => (
                        <Grid
                            item
                            lg={3}
                            md={3}
                            sm={12}
                            xs={12}
                            key={president?.id}
                        >
                            <Card>
                                <CardMedia
                                    component="img"
                                    image={president?.imageUrl}
                                    alt={president?.name}
                                    height="200px"
                                />
                                <CardContent>
                                    <Typography align="center" variant="subtitle1">
                                        {president?.name}
                                    </Typography>
                                    <Typography
                                        align="center"
                                        variant="subtitle2"
                                    >
                                        {president?.year}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            backgroundColor: '#f36a11',
                                            color: '#fff',
                                        }}
                                        onClick={() =>
                                            handleDelete(president?.id)
                                        }
                                    >
                                        Delete
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default Presidents
