import { Container, Grid, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { FacebookOutlined, Twitter, Instagram } from '@mui/icons-material'

import React from 'react'

import './footer.css'

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#050543' }}>
            <Container sx={{ padding: '20px' }}>
                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    sx={{ paddingTop: '15px' }}
                >
                    <Grid item lg={4} md={4} xs={12}>
                        <Box sx={{ textAlign: 'left', height: '38px' }}>
                            <Typography
                                variant="subtitle1"
                                sx={{ color: '#fff5f1' }}
                            >
                                NUST Delta Building
                            </Typography>
                        </Box>
                        <Box sx={{ textAlign: 'left', height: '38px' }}>
                            <Typography
                                variant="subtitle1"
                                sx={{ color: '#fff5f1' }}
                            >
                                Basement Floor
                            </Typography>
                        </Box>
                        <Box sx={{ textAlign: 'left', height: '38px' }}>
                            <Typography
                                variant="subtitle1"
                                sx={{ color: '#fff5f1' }}
                            >
                                nust.srh@gmail.com
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item lg={4} md={4} xs={12}>
                        <Grid container justifyContent="left">
                            <Grid item xs={6}>
                                <Box sx={{ textAlign: 'left', height: '38px' }}>
                                    <a
                                        className="link"
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://nust.ac.zw"
                                    >
                                        NUST
                                    </a>
                                </Box>
                                <Box sx={{ textAlign: 'left', height: '38px' }}>
                                    <a
                                        className="link"
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://saywhat.org.zw"
                                    >
                                        SAYWHAT
                                    </a>
                                </Box>

                                <Box sx={{ textAlign: 'left', height: '38px' }}>
                                    <a
                                        className="link"
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://friendshipbench.org"
                                    >
                                        Friendship Bench
                                    </a>
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box sx={{ textAlign: 'left', height: '38px' }}>
                                    <Link
                                        to="/blog"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            textDecoration: 'none',
                                            height: '38px',
                                        }}
                                    >
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                color: '#fff5f1',
                                                textAlign: 'left',
                                                ':hover': { color: '#f36a11' },
                                            }}
                                        >
                                            Blog
                                        </Typography>
                                    </Link>
                                </Box>
                                <Box sx={{ textAlign: 'left', height: '38px' }}>
                                    <Link
                                        to="/"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                color: '#fff5f1',
                                                textAlign: 'left',
                                                ':hover': { color: '#f36a11' },
                                            }}
                                        >
                                            Fundraisers
                                        </Typography>
                                    </Link>
                                </Box>
                                <Box sx={{ textAlign: 'left', height: '38px' }}>
                                    <Link
                                        to="/alumni"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                color: '#fff5f1',
                                                textAlign: 'left',
                                                ':hover': { color: '#f36a11' },
                                            }}
                                        >
                                            Alumni Network
                                        </Typography>
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={4} md={4} xs={12}>
                        <Grid
                            container
                            spacing={1}
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            display="flex"
                        >
                            <Grid item flex={1}>
                                <a
                                    style={{ color: '#fff' }}
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.facebook.com/nust.srh/"
                                >
                                    <FacebookOutlined
                                        sx={{
                                            textAlign: 'center',
                                            display: 'flex',
                                            color: '#fff5f1',
                                            fontSize: '70px',
                                            ':hover': {
                                                color: '#f36a11',
                                            },
                                        }}
                                    />
                                </a>
                            </Grid>
                            <Grid item flex={1}>
                                <a
                                    style={{ color: '#fff' }}
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://twitter.com/choicenust"
                                >
                                    <Twitter
                                        sx={{
                                            textAlign: 'center',
                                            display: 'flex',
                                            color: '#fff5f1',
                                            fontSize: '70px',
                                            ':hover': {
                                                color: '#f36a11',
                                            },
                                        }}
                                    />
                                </a>
                            </Grid>
                            <Grid item flex={1}>
                                <a
                                    style={{ color: '#fff' }}
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.instagram.com/nust.srh/"
                                >
                                    <Instagram
                                        sx={{
                                            textAlign: 'center',
                                            display: 'flex',
                                            color: '#fff5f1',
                                            fontSize: '70px',
                                            ':hover': {
                                                color: '#f36a11',
                                            },
                                        }}
                                    />
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <br />
            </Container>
            <div style={{ backgroundColor: '#333' }}>
                <Container maxWidth="sm" sx={{ paddingTop: '10px' }}>
                    <Typography
                        variant="subtitle2"
                        align="center"
                        sx={{ color: '#fff' }}
                    >
                        The Choice Champions © {new Date().getFullYear()}. All
                        right reserved.{' '}
                        <a
                            style={{ color: '#fff' }}
                            target="_blank"
                            rel="noreferrer"
                            href="https://munashe.co.zw"
                        >
                            SiDesigned
                        </a>
                    </Typography>
                </Container>
                <br />
            </div>
        </div>
    )
}

export default Footer
