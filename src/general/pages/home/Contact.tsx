import {
    Grid,
    TextField,
    Typography,
    Button,
    Box,
    Container,
    FormControlLabel,
    Checkbox,
} from '@mui/material'
import React from 'react'
import emailjs from '@emailjs/browser'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../../services/firebaseConfig'

const Contact = () => {
    const form = React.useRef<HTMLFormElement>(null)
    const [loader, setLoader] = React.useState(false)
    const [loader2, setLoader2] = React.useState(false)
    const [volunteering, setVolunteering] = React.useState<boolean>(false)
    const [notices, setNotices] = React.useState<boolean>(false)
    const [email, setEmail] = React.useState<string>('')

    const sendEmail = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setLoader(true)

        const currentForm = form.current
        if (currentForm == null) return

        emailjs
            .sendForm(
                'choice-champs',
                'ncc_contact',
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

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setLoader2(true)

        const subscriptionRef = collection(db, 'NewsLetter')
        await addDoc(subscriptionRef, {
            email: email,
            volunteering: volunteering,
            notices: notices,
        })
            .then(() => {
                setLoader2(false)
                alert('Subscription Successful')
            })
            .catch((error) => {
                alert(error.message)
                setLoader2(false)
            })

        setEmail('')
        setNotices(false)
        setVolunteering(false)
    }

    return (
        <div style={{ background: '#d3d3d3' }}>
            <Container
                maxWidth="md"
                sx={{ paddingtop: '20px', paddingBottom: '20px' }}
            >
                <Grid
                    container
                    spacing={3}
                    sx={{ justifyContent: 'space-evenly' }}
                >
                    <Grid item xs={12} lg={6} md={6}>
                        <form ref={form} onSubmit={sendEmail}>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: '#050543',
                                    fontStyle: 'italic',
                                    textAlign: 'center',
                                }}
                            >
                                Reach Out to Us
                            </Typography>
                            <Grid
                                container
                                spacing={0.5}
                                style={{
                                    backgroundColor: 'transparent',
                                    paddingRight: '50px',
                                    paddingLeft: '30px',
                                }}
                            >
                                <Grid xs={12} sm={12} item>
                                    <TextField
                                        placeholder="Name"
                                        label="Name"
                                        name="name"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        inputProps={{
                                            style: {
                                                color: '#050543',
                                            },
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                color: '#f36a11',
                                            },
                                        }}
                                        sx={{
                                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                            {
                                                borderColor: '#f36a11',
                                                borderWidth: '1px',
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        type="email"
                                        placeholder="Enter email"
                                        label="Email"
                                        name="email"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        inputProps={{
                                            style: {
                                                color: '#050543',
                                            },
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                color: '#f36a11',
                                            },
                                        }}
                                        sx={{
                                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                            {
                                                borderColor: '#f36a11',
                                                borderWidth: '1px',
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Message"
                                        multiline
                                        rows={2}
                                        placeholder="Type your message here"
                                        name="message"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        inputProps={{
                                            style: {
                                                color: '#050543',
                                            },
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                color: '#f36a11',
                                            },
                                        }}
                                        sx={{
                                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                            {
                                                borderColor: '#f36a11',
                                                borderWidth: '1px',
                                            },
                                        }}
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
                                                color: '#e1e1e1',
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
                    </Grid>
                    <Grid item xs={12} lg={6} md={6}>
                        <Container>
                            <Typography
                                variant="h6"
                                sx={{ color: '#050543', fontWeight: 'bold' }}
                                align="center"
                            >
                                Newsletter
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                sx={{ color: '#050543' }}
                                align="center"
                            >
                                Subscribe to our Newsletter and mailing list
                            </Typography>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    type="email"
                                    placeholder="Enter email"
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    inputProps={{
                                        style: {
                                            color: '#050543',
                                        },
                                    }}
                                    InputLabelProps={{
                                        style: {
                                            color: '#f36a11',
                                        },
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                        {
                                            borderColor: '#f36a11',
                                            borderWidth: '1px',
                                        },
                                        marginTop: '15px',
                                    }}
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            onChange={() =>
                                                setNotices(!notices)
                                            }
                                            sx={{
                                                color: '#f36a11',
                                                '&.Mui-checked': {
                                                    color: '#f36a11',
                                                },
                                            }}
                                        />
                                    }
                                    label="Send me important notices via email"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            onChange={() =>
                                                setVolunteering(!volunteering)
                                            }
                                            sx={{
                                                color: '#f36a11',
                                                '&.Mui-checked': {
                                                    color: '#f36a11',
                                                },
                                            }}
                                        />
                                    }
                                    label="Add me on the always ready volunteers listing"
                                />
                                <Box textAlign="center" marginTop="15px">
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        style={{
                                            backgroundColor: loader2
                                                ? '#ccc'
                                                : '#f36a11',
                                            color: '#e1e1e1',
                                            fontSize: '14px',
                                            borderRadius: 10,
                                        }}
                                    >
                                        Submit
                                    </Button>
                                </Box>
                            </form>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Contact
