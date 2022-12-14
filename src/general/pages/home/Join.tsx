import React from 'react'
import MuiPhoneNumber from 'material-ui-phone-number'
import {
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Box,
} from '@mui/material'
import emailjs from '@emailjs/browser'

const Join = () => {
    const [loader, setLoader] = React.useState(false)

    const form = React.useRef<HTMLFormElement>(null)

    const sendEmail = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setLoader(true)

        const currentForm = form.current
        if (currentForm == null) return

        emailjs
            .sendForm(
                'choice-champs',
                'ncc-register',
                currentForm,
                's7js2dZoHMVYni1ob',
            )
            .then(
                (result) => {
                    console.log(result.text)
                    setLoader(false)
                    alert('Submission successful, we will get back to you')
                },
                (error) => {
                    console.log(error.text)
                    setLoader(false)
                    alert('Error! Please try again')
                },
            )
        currentForm.reset()
    }

    return (
        <>
            <Container>
                <Grid
                    container
                    maxWidth="lg"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ padding: '20px' }}
                >
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <Typography
                            variant="h4"
                            align="center"
                            sx={{ color: '#f36a11', fontWeight: 'bold' }}
                        >
                            Join Us!
                        </Typography>
                        <Typography
                            variant="h6"
                            align="center"
                            sx={{
                                fontWeight: 'bold',
                                padding: '30px',
                                paddingTop: '0px',
                            }}
                        >
                            You too can help to make positive changes in our
                            communities. Join us today
                        </Typography>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Card
                            style={{
                                maxWidth: 450,
                                padding: '20px 5px',
                                border: 'none',
                                boxShadow: 'none',
                            }}
                        >
                            <CardContent>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                    gutterBottom
                                    align="center"
                                    sx={{ fontStyle: 'italic' }}
                                >
                                    If interested, please fill in your details
                                    and we will get back to you.
                                </Typography>
                                <form ref={form} onSubmit={sendEmail}>
                                    <Grid container spacing={1}>
                                        <Grid xs={12} item>
                                            <TextField
                                                placeholder="Name"
                                                name="name"
                                                variant="outlined"
                                                fullWidth
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                placeholder="Email"
                                                name="email"
                                                variant="outlined"
                                                fullWidth
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12} marginTop="5px">
                                            <MuiPhoneNumber
                                                variant="outlined"
                                                defaultCountry={'zw'}
                                                fullWidth
                                                required
                                                name="phone"
                                                onChange={() => {}}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Box textAlign="center">
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    style={{
                                                        backgroundColor: loader
                                                            ? '#ccc'
                                                            : '#f36a11',
                                                        color: '#f5f5f5',
                                                        fontSize: '14px',
                                                        borderRadius: 10,
                                                    }}
                                                >
                                                    Submit
                                                </Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Join
