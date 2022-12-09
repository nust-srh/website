import { doc, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../../services/firebaseConfig'
import { Button, Container, Typography } from '@mui/material'
import { Box, TextField, LinearProgress } from '@mui/material'
import { Grid, Modal } from '@mui/material'
import Upload from '@mui/icons-material/Upload'
import { updateDoc } from 'firebase/firestore'
import { storage } from '../../../services/firebaseConfig'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

const WelcomeMessage = () => {
    const [remarks, setRemarks] = useState<any>()

    const [loader, setLoader] = React.useState(false)
    const [open, setOpen] = React.useState(false)
    const [image, setImage] = React.useState<any>(null)
    const [progress, setProgress] = React.useState(0)
    const [name, setName] = React.useState('')
    const [message, setMessage] = React.useState('')

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    useEffect(() => {
        const docRef = doc(db, 'Welcome', 'Remarks')
        onSnapshot(docRef, (snapshot) => {
            setRemarks({ ...snapshot.data(), id: snapshot.id })
        })
    })

    const handleImageChange = (e: any) => {
        setImage(e.target.files[0])
    }

    const handleUpdate = () => {
        setLoader(true)

        const storageRef = ref(storage, 'images/' + image.name)
        const uploadTask = uploadBytesResumable(storageRef, image)

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progressPercent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )
                setProgress(progressPercent)
            },
            (error) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break
                    case 'storage/canceled':
                        // User canceled the upload
                        break

                    // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break

                    default:
                        break
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then(
                    async (downloadURL) => {
                        const ExecutiveRef = doc(db, 'Welcome', 'Remarks')
                        await updateDoc(ExecutiveRef, {
                            name: name,
                            message: message,
                            imageUrl: downloadURL,
                        })
                            .then(() => {
                                setLoader(false)
                                setProgress(0)
                                alert('Welcome Remarks Successfully Published')
                                handleClose()
                            })
                            .catch((error) => {
                                alert(error.message)
                                setLoader(false)
                            })
                    }
                )
            }
        )
        setName('')
        setMessage('')
        setImage('')
    }

    return (
        <>
            <Container maxWidth="lg" sx={{ padding: '20px' }}>
                <Typography
                    align="center"
                    variant="h5"
                    sx={{ fontWeight: 'bold' }}
                >
                    Welcome Homepage Message
                </Typography>
                <Container
                    maxWidth="sm"
                    sx={{
                        backgroundColor: 'transparent',
                        justifyContent: 'center',
                        paddingTop: '20px',
                    }}
                >
                    <img
                        src={remarks?.imageUrl}
                        alt={remarks?.name}
                        style={{
                            height: '250px',
                            width: '250px',
                            borderRadius: '125px',
                        }}
                    />
                    <Typography
                        gutterBottom
                        variant="h5"
                        sx={{ fontWeight: 'bold' }}
                        component="div"
                    >
                        President: {remarks?.name}
                    </Typography>
                    <Typography variant="body1" className="body">
                        Remarks: {remarks?.message}
                    </Typography>
                    <br />
                    <Button
                        variant="outlined"
                        sx={{ backgroundColor: '#f36a11', color: '#fff' }}
                        onClick={handleOpen}
                    >
                        Edit
                    </Button>
                    <Box textAlign="center">
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={{ ...style, width: 400 }}>
                                <Grid
                                    container
                                    spacing={1.3}
                                    sx={{
                                        marginTop: '20px',
                                        marginBottom: '20px',
                                    }}
                                >
                                    <Grid item xs={6}>
                                        <Box textAlign="center">
                                            <input
                                                accept="image/*"
                                                style={{
                                                    display: 'none',
                                                }}
                                                id="raised-button-file"
                                                multiple
                                                type="file"
                                                onChange={handleImageChange}
                                            />
                                            <label htmlFor="raised-button-file">
                                                <Button
                                                    component="span"
                                                    sx={{
                                                        color: '#333333',
                                                    }}
                                                >
                                                    <Upload /> Executive's
                                                    Portrait
                                                </Button>
                                                {loader ? (
                                                    <Box
                                                        sx={{
                                                            width: '100%',
                                                        }}
                                                    >
                                                        <LinearProgress
                                                            variant="determinate"
                                                            value={progress}
                                                        />
                                                    </Box>
                                                ) : null}
                                            </label>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            placeholder="President Name"
                                            label="Name"
                                            name="name"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            sx={{
                                                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                                    {
                                                        borderWidth: '1px',
                                                    },
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            placeholder="Bio Statement"
                                            label="Bio"
                                            name="bio"
                                            variant="outlined"
                                            fullWidth
                                            multiline
                                            rows={2}
                                            required
                                            value={message}
                                            onChange={(e) =>
                                                setMessage(e.target.value)
                                            }
                                            sx={{
                                                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                                    {
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
                                                        ? '#d3d3d3'
                                                        : '#f36a11',
                                                    fontSize: '14px',
                                                    borderRadius: 10,
                                                    color: '#e1e1e1',
                                                }}
                                                onClick={() => handleUpdate()}
                                            >
                                                Publish
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Modal>
                    </Box>
                </Container>
            </Container>
        </>
    )
}

export default WelcomeMessage
