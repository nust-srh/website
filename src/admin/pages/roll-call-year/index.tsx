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
import { Link, useParams } from 'react-router-dom'

import { db } from '../../../services/firebaseConfig'
import AddRollCallPerson from '../add/AddRollCallPerson'

type IPresident = {
    program: string
    id: string
    imageUrl: string
    name: string
    year: string
}

const RollCallYear = () => {
    const [recruits, setRecruits] = React.useState<IPresident[]>([])
    const { year } = useParams()

    React.useEffect(() => {
        const PeersRef = doc(db, 'RollCall', `${year ? year : '0'}`)
        const q = query(
            collection(PeersRef, 'educators'),
            orderBy('createdAt', 'desc')
        )
        const unsub = onSnapshot(q, (querySnapshot) => {
            let recruitsArray: any = []
            querySnapshot.forEach((doc) => {
                recruitsArray.push({ ...doc.data(), id: doc.id })
            })
            setRecruits(recruitsArray)
        })
        return () => unsub()
    }, [])

    const handleDelete = async (id: string) => {
        await deleteDoc(doc(db, 'RollCall', `${year}`, 'educators', id))
    }

    return (
        <div>
            <Container maxWidth="lg">
                <Typography
                    align="center"
                    variant="h5"
                    sx={{ fontWeight: 'bold' }}
                >
                    Recruits of the year {year}
                </Typography>
                <br />
                <AddRollCallPerson />
                <Grid container spacing={3} justifyContent="center">
                    {recruits.map((recruit) => (
                        <Grid
                            item
                            lg={3}
                            md={3}
                            sm={12}
                            xs={12}
                            key={recruit?.id}
                        >
                            <Card>
                                <CardMedia
                                    component="img"
                                    image={recruit?.imageUrl}
                                    alt={recruit?.name}
                                    height="200px"
                                />
                                <CardContent>
                                    <Typography
                                        align="center"
                                        variant="subtitle2"
                                    >
                                        {recruit?.name}
                                    </Typography>
                                    <Typography
                                        align="center"
                                        variant="subtitle2"
                                    >
                                        {recruit?.program}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            backgroundColor: 'red',
                                            color: '#fff',
                                            fontSize: '10px'
                                        }}
                                        onClick={() =>
                                            handleDelete(recruit?.id)
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

export default RollCallYear
