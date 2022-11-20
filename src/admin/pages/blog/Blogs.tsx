import React, { useState, useEffect } from 'react'
import {
    Card,
    CardMedia,
    Container,
    Grid,
    Typography,
    Button,
} from '@mui/material'
import {
    collection,
    query,
    onSnapshot,
    deleteDoc,
    doc,
} from 'firebase/firestore'

import { db } from '../../../services/firebaseConfig'

type IBlog = {
    id: string
    abstract: string
    author: string
    body: string
    createdAt: number
    imageUrl: string
    title: string
}

const Blogs = () => {
    const [Blogs, setBlogs] = useState<IBlog[]>([])

    useEffect(() => {
        const q = query(collection(db, 'Blogs'))
        const unsub = onSnapshot(q, (querySnapshot) => {
            let BlogsArray: any = []
            querySnapshot.forEach((doc) => {
                BlogsArray.push({ ...doc.data(), id: doc.id })
            })
            setBlogs(BlogsArray)
        })
        return () => unsub()
    }, [])

    const handleDelete = async (id: any) => {
        await deleteDoc(doc(db, 'Articles', id))
    }

    return (
        <>
            <Container maxWidth="lg" sx={{ marginTop: '20px' }}>
                {Blogs.map((Blog) => (
                    <Card sx={{ backgroundColor: 'transparent' }} key={Blog.id}>
                        <Grid
                            container
                            spacing={2}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item lg={2} md={2} sm={12} xs={12}>
                                <CardMedia
                                    component="img"
                                    image={Blog.imageUrl}
                                    alt={Blog.title}
                                    height="150px"
                                />
                            </Grid>
                            <Grid item lg={3} md={3} sm={12} xs={12}>
                                <Typography variant="h6">
                                    {Blog.title}
                                </Typography>
                                <Typography variant="subtitle2">
                                    {new Date(Blog.createdAt *26.157).toDateString()}
                                </Typography>
                            </Grid>
                            <Grid item lg={5} md={5} sm={12} xs={12}>
                                <Typography variant="subtitle2">
                                    {Blog.abstract}
                                </Typography>
                            </Grid>
                            <Grid item lg={2} md={2} sm={12} xs={12}>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        backgroundColor: 'red',
                                        color: '#fff',
                                    }}
                                    onClick={handleDelete}
                                >
                                    Delete
                                </Button>
                                <br />
                                <br />
                            </Grid>
                        </Grid>
                    </Card>
                ))}
            </Container>
        </>
    )
}

export default Blogs
