import { Button, Container, Typography, Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Pictures from './Pictures'

const PhotoGallery = () => {
    return (
        <Container maxWidth="lg" sx={{ paddingTop: '70px' }}>
            <Typography variant="h4" align="center" sx={{ fontWeight: 'bold' }}>
                Photo Gallery
            </Typography>
            <Link
                to="/mambo/gallery/add"
                style={{ textDecoration: 'none' }}
            >
                <Box
                    textAlign="center"
                    justifyContent="center"
                    sx={{ padding: '20px' }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#f36a11',
                            borderRadius: '15px',
                        }}
                    >
                        Add New Picture
                    </Button>
                </Box>
            </Link>
            <Pictures />
        </Container>
    )
}

export default PhotoGallery
