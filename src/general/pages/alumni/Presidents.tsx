import React from 'react'
import {
    Card,
    Container,
    Grid,
    Typography,
    Box,
    CardMedia,
    CardContent,
    Button,
} from '@mui/material'
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

async function articlesNextBatch(lastDocument: any) {
    const next = query(
        collection(db, 'Presidents'),
        orderBy('year', 'desc'),
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
        collection(db, 'Presidents'),
        orderBy('year', 'desc'),
        limit(articleSize)
    )

    return onSnapshot(q, snapshotCallback)
}

const articleSize = 4
const Presidents = () => {
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
        <div style={{ background: '#fafafa' }}>
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
                    Past Presidents
                </Typography>
            </Container>
            <Grid container spacing={3} justifyContent='center' sx={{padding: '20px'}}>
                {data.map((president) => (
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
                                height="250px"
                            />
                            <CardContent>
                                <Typography align="center" variant="subtitle1">
                                    {president?.name}
                                </Typography>
                                <Typography align="center" variant="subtitle2">
                                    {president?.year}
                                </Typography>
                            </CardContent>
                        </Card>
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
                    sx={{ marginTop: '8px', backgroundColor: '#f36a11' }}
                >
                    Load More
                </Button>
            </Box>
        </div>
    )
}

export default Presidents
