import React from 'react'
import { Card, Container, Grid, Typography, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import {
    collection,
    onSnapshot,
    orderBy,
    query,
    limit,
    DocumentData,
    getDocs,
    QuerySnapshot,
    startAfter,
    Unsubscribe,
} from 'firebase/firestore'
import { db } from '../../../services/firebaseConfig'

const articleSize = 4

/**
 * this function will be fired each time the user click on 'More Posts' button,
 * it receive key of last post in previous batch, then fetch next posts
 * starting after last fetched post.
 */
async function articlesNextBatch(lastDocument: any) {
    const next = query(
        collection(db, 'Blogs'),
        orderBy('createdAt', 'desc'),
        startAfter(lastDocument),
        limit(articleSize)
    )

    const articles: any[] = []

    const documentSnapshots = await getDocs(next)

    const lastVisible =
        documentSnapshots.docs[documentSnapshots.docs.length - 1]

    documentSnapshots.forEach((doc) => {
        articles.push({ id: doc.id, ...doc.data() })
    })

    return { articles, lastVisible }
}

function getFirstArticlesBatch(
    snapshotCallback: (querySnapshot: QuerySnapshot<DocumentData>) => void
): Unsubscribe {
    const q = query(
        collection(db, 'RollCall'),
        orderBy('year', 'desc'),
        limit(articleSize)
    )

    return onSnapshot(q, snapshotCallback)
}

const RollCall = () => {
    const [data, setData] = React.useState<any[]>([])
    const dataRef = React.useRef(data)
    const [lastDocument, setLastDocument] = React.useState<any>(null)
    const [fetchingData, setFetchingData] = React.useState(true)

    function updateData(newData: any) {
        dataRef.current = newData
        setData(newData)
    }

    React.useEffect(() => {
        const unsub = getFirstArticlesBatch((querySnapshot) => {
            const posts: any[] = []
            querySnapshot.docChanges().forEach(({ type, doc }) => {
                if (type === 'added') posts.push({ id: doc.id, ...doc.data() })
            })

            if (dataRef.current.length === 0)
                setLastDocument(
                    querySnapshot.docChanges()[
                        querySnapshot.docChanges().length - 1
                    ].doc
                )
            setFetchingData(false)
            updateData([...posts, ...dataRef.current])
        })

        return () => {
            unsub()
        }
    }, [])

    async function nextDocuments() {
        if (!lastDocument) return
        setFetchingData(true)
        const { articles, lastVisible } = await articlesNextBatch(lastDocument)

        setLastDocument(lastVisible)
        setFetchingData(false)
        updateData([...data, ...articles])
    }

    return (
        <div>
            <Container maxWidth="lg" sx={{ padding: '20px' }}>
                <Typography
                    align="center"
                    gutterBottom
                    sx={{
                        fontSize: '2.3rem',
                        fontWeight: 'bold',
                        marginBottom: '0px',
                        color: '#f36a11',
                    }}
                >
                    Our Alumni Community
                </Typography>
                <Container maxWidth="sm">
                    <br />
                    <Typography variant="subtitle1" align="center">
                        We are proud to have been there and served our fellow
                        peers. We take pride in the fact that we have made
                        possitive changes in the lives of others. Let the roll
                        call serve as testament to our service.
                    </Typography>
                    <Typography
                        align="center"
                        variant="h5"
                        gutterBottom
                        sx={{
                            fontWeight: 'bold',
                            paddingTop: '20px',
                            color: '#f36a11',
                            fontStyle: 'italic',
                        }}
                    >
                        The Choice Champions Roll Call
                    </Typography>
                </Container>
                <Grid
                    container
                    padding="30px"
                    spacing={5}
                    justifyContent="space-evenly"
                >
                    {data.map((year) => (
                        <Grid item lg={3} md={3} sm={6} xs={12} key={year?.id}>
                            <Link
                                to={`/mambo/roll-call/${year?.year}`}
                                style={{ textDecoration: 'none' }}
                            >
                                <Card sx={{ width: '150px' }}>
                                    <Box
                                        justifyContent="center"
                                        alignItems="center"
                                        textAlign="center"
                                        display="flex"
                                        height="150px"
                                    >
                                        {year?.year}
                                    </Box>
                                </Card>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
                <Box
                    textAlign="center"
                    sx={{ marginTop: '30px', paddingBottom: '20px ' }}
                >
                    <Button
                        variant="contained"
                        onClick={nextDocuments}
                        disabled={!lastDocument}
                        sx={{
                            marginTop: '8px',
                            backgroundColor: '#f36a11',
                        }}
                    >
                        Load More
                    </Button>
                </Box>
            </Container>
        </div>
    )
}

export default RollCall
