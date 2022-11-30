import React from 'react'
import { Container, Typography, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Years from './Years'

const RollCall = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Typography
                    align="center"
                    variant="h5"
                    sx={{ fontWeight: 'bold' }}
                >
                    Peer Educators Roll Call
                </Typography>
                <br />
                <Box
                    textAlign="center"
                    justifyContent="center"
                    sx={{ padding: '20px' }}
                >
                    <Link
                        to="/mambo/roll-call/add"
                        style={{ textDecoration: 'none' }}
                    >
                        <Button
                            variant="outlined"
                            sx={{
                                backgroundColor: '#f36a11',
                                color: '#fff',
                                borderRadius: '10px',
                            }}
                        >
                            Add Recruitment Year
                        </Button>
                    </Link>
                </Box>
                <Years />
            </Container>
        </>
    )
}

export default RollCall
