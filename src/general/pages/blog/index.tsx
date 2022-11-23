import React from 'react'
import banner from '../../../assets/banner.jpg'
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

function getFirstArticlesBatch(
    snapshotCallback: (querySnapshot: QuerySnapshot<DocumentData>) => void
): Unsubscribe {
    const q = query(
        collection(db, 'Blogs'),
        orderBy('createdAt', 'desc'),
        limit(articleSize)
    )

    return onSnapshot(q, snapshotCallback)
}

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

const Blog = () => {
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
    console.log(data)

    return (
        <div style={{ background: '#fafafa' }}>
            <img src={banner} width="100%" height="250px" alt="banner" />
            <br />
            <Container maxWidth="lg">
                <Typography
                    align="center"
                    gutterBottom
                    sx={{
                        fontSize: '2.3rem',
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        marginBottom: '0px',
                    }}
                >
                    The Choice Champions' Blog
                </Typography>
                <Typography
                    align="right"
                    variant="subtitle2"
                    gutterBottom
                    sx={{ fontStyle: 'italic' }}
                >
                    NB: views shared do not necessarily represent the
                    organisation's positions
                </Typography>
            </Container>
            <Grid container padding="30px" spacing={3}>
                {data.map((blog) => (
                    <Grid item lg={4} md={4} sm={12} xs={12} key={blog.id}>
                        <Card sx={{ height: '270px' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        width: '150px',
                                        height: '150px',
                                        backgroundColor: '#f36a11',
                                    }}
                                    image={blog.imageUrl}
                                    alt={blog.title}
                                />
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography
                                            align="center"
                                            component="div"
                                            variant="h6"
                                            sx={{ fontWeight: 'bold' }}
                                        >
                                            {blog.title}
                                        </Typography>
                                        <Typography
                                            variant="subtitle2"
                                            color="text.secondary"
                                            component="div"
                                        >
                                            by {blog.author}
                                        </Typography>
                                        <Typography
                                            variant="subtitle2"
                                            color="text.secondary"
                                            component="div"
                                        >
                                            {new Date(
                                                blog.createdAt.seconds * 1000
                                            ).toDateString()}
                                        </Typography>
                                    </CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            pl: 1,
                                            pb: 1,
                                        }}
                                    >
                                        <Typography
                                            variant="subtitle2"
                                            align="center"
                                        >
                                            {blog.abstract}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <br />
                            <Box textAlign="center">
                                <Link
                                    to={`/blog/${blog.id}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        style={{
                                            backgroundColor: '#f36a11',
                                            color: '#e1e1e1',
                                            fontSize: '14px',
                                            borderRadius: 10,
                                        }}
                                    >
                                        Continue Reading
                                    </Button>
                                </Link>
                            </Box>
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

export default Blog
