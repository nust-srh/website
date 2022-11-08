import { Button, Typography, Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import Articles from './Articles'

const Blog = () => {
    return (
        <div>
            <Typography align='center' variant='h5' sx={{ fontWeight: 'bold' }}>
                Blog Articles
            </Typography>
            <Link
                to='/mambo/blog/add'
                target='_blank'
                rel='noreferrer'
                style={{ textDecoration: 'none' }}
            >
                <Box
                    textAlign='center'
                    justifyContent='center'
                    sx={{ padding: '20px' }}
                >
                    <Button
                        variant='outlined'
                        sx={{
                            backgroundColor: '#f36a11',
                            color: '#fff',
                            borderRadius: '10px',
                        }}
                    >
                        Add Article
                    </Button>
                </Box>
            </Link>
            <Articles />
        </div>
    )
}

export default Blog
