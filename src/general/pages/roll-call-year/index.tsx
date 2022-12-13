import React from 'react'
import {
    Card,
    CardMedia,
    Container,
    Grid,
    Typography,
    CardContent,
} from '@mui/material'
import { collection, query, onSnapshot, doc, orderBy } from 'firebase/firestore'
import { useParams } from 'react-router-dom'

import { db } from '../../../services/firebaseConfig'
import { Helmet } from 'react-helmet-async'

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

    return (
        <div style={{ minHeight: '50vh' }}>
            <Helmet>
                <title>{year} Champions</title>
                <meta
                    name="description"
                    content="We have lived through and are proud to have served. We shall continue to serve, providing the roots for the organisation to blossom"
                />
                <meta name="keywords" content="Nust Choice Champions, Peer Educators, Zimbabwe, NUST, health, Choice Champions"/>
            </Helmet>
            <Container maxWidth="lg" sx={{ padding: '30px' }}>
                <Typography
                    align="center"
                    variant="h4"
                    sx={{ fontWeight: 'bold', color: '#f36a11' }}
                >
                    The Champions of {year}
                </Typography>
                <br />
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
                                    height="250px"
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
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default RollCallYear
