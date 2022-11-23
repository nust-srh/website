import { Container, Typography, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Events from './Events'

const Calendar = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Typography
                    align="center"
                    variant="h5"
                    sx={{ fontWeight: 'bold' }}
                >
                    Semester Calendar
                </Typography>
                <br />
                <Box
                    textAlign="center"
                    justifyContent="center"
                    sx={{ padding: '20px' }}
                >
                    <Link
                        to="/mambo/events/add"
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
                            Add Event
                        </Button>
                    </Link>
                </Box>
                <Events />
            </Container>
        </>
    )
}

export default Calendar
