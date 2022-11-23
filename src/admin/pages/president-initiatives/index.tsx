import React from 'react'
import {
    Container,
    Typography,
    Box,
    Button,
} from '@mui/material'
import { Link } from 'react-router-dom'
import PresInitiatives from './PresInitiatives'

const PresidentInitiatives = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Typography
                    align="center"
                    variant="h5"
                    sx={{ fontWeight: 'bold' }}
                >
                    President's Initiatives
                </Typography>
                <br />
                <Box
                    textAlign="center"
                    justifyContent="center"
                    sx={{ padding: '20px' }}
                >
                    <Link
                        to="/mambo/initiatives/add"
                        target="_blank"
                        rel="noreferrer"
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
                            Add Initiative
                        </Button>
                    </Link>
                </Box>
               <PresInitiatives/>
            </Container>
        </>
    )
}

export default PresidentInitiatives
