import { Box, Container, Grid, Typography } from '@mui/material'

import confidentiality from '../../../assets/confidentiality.png'
import inclusive from '../../../assets/inclusive.png'
import excellence from '../../../assets/excellence.png'
import integrity from '../../../assets/integrity.png'



type coreValue = {
    name: string,
    picture: string,
}

const coreValues: coreValue[] = [
    {
        name: 'Integrity',
        picture: integrity
    },
    {
        name: 'Inclusivity',
        picture: inclusive
    },
    {
        name: 'Excellence',
        picture: excellence
    },
    {
        name: 'Confidentiality',
        picture: confidentiality
    },
]

function Objectives() {
    return (
        <div>
            <Container maxWidth="sm">
                <Typography
                    align="center"
                    sx={{
                        fontSize: '1.9rem',
                        color: '#f36a11',
                        fontWeight: 'bold',
                    }}
                >
                    Our Purpose
                </Typography>
                <br />
                <Typography
                    align="center"
                    variant="h6"
                    sx={{ color: '#050543' }}
                >
                    We promote health-enhancing behavior change in young
                    students by providing suggestions to pressing health and
                    social problems so that people live healthier, happier and
                    more productive lives.
                </Typography>
            </Container>
            <Container maxWidth="lg" sx={{ marginTop: '40px' }}>
                <Typography
                    align="center"
                    sx={{
                        fontSize: '1.9rem',
                        color: '#f36a11',
                        fontWeight: 'bold',
                        paddingBottom: '24px'
                    }}
                >
                    Our Core Values
                </Typography>
                <Grid container spacing={5} justifyContent="space-evenly">
                    {coreValues.map((item, index) => (
                        <Grid item lg={3} md={3} xs={12}>
                            <Box
                                alignItems="center"
                                display="flex"
                                flexDirection="column"
                                minHeight='240px'
                                sx={{
                                    borderRadius: '12px',
                                    paddingX: '8px'
                                }}
                            >
                                <Box>
                                    <img
                                        src={item.picture}
                                        alt=''
                                        height='140px'
                                    />
                                </Box>
                                <Box>
                                    <Typography
                                        align="center"
                                        sx={{
                                            paddingY: '20px',
                                            fontWeight: 'bold',
                                            fontSize: '1.3rem'
                                        }}
                                    >
                                        {item.name}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default Objectives
