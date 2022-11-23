import {
    Container,
    Grid,
    Typography,
    TextField,
    Box,
    Button,
} from '@mui/material'
import * as React from 'react'
import { LinearProgress } from '@mui/material'
import UploadIcon from '@mui/icons-material/Upload'

import { Timestamp, collection, addDoc } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage, db } from '../../../services/firebaseConfig'

const AddPresInitiative = () => {
    const [loader, setLoader] = React.useState(false)
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [image, setImage] = React.useState<any>(null)
    const [details, setDetails] = React.useState('')
    const [partners, setPartners] = React.useState('')
    const [duration, setDuration] = React.useState('')
    const [progress, setProgress] = React.useState(0)

    const handleImageChange = (e: any) => {
        setImage(e.target.files[0])
    }

    const handlePublish = (event: any) => {
        event.preventDefault()
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
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const eventRef = collection(db, 'Initiatives')
                    addDoc(eventRef, {
                        title: title,
                        imageUrl: downloadURL,
                        createdAt: Timestamp.now().toDate(),
                        description: description,
                        details: details,
                        partners: partners,
                        duration: duration,
                    })
                        .then(() => {
                            setLoader(false)
                            setProgress(0)
                            alert('initiative Successfully Published')
                        })
                        .catch((error) => {
                            alert(error.message)
                            setLoader(false)
                        })
                })
            }
        )

        setTitle('')
        setDescription('')
        setDetails('')
        setImage('')
        setPartners('')
        setDuration('')
    }

    return (
        <div>
            <Container maxWidth="lg" sx={{ paddingTop: '70px' }}>
                <Typography variant="h3" align="center">
                    Add Presidents Initiative
                </Typography>

                <Grid
                    container
                    spacing={1.3}
                    sx={{ marginTop: '20px', marginBottom: '20px' }}
                >
                    <Grid item xs={12}>
                        <TextField
                            placeholder="Initiative Title"
                            label="Title"
                            name="title"
                            variant="outlined"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            fullWidth
                            required
                            sx={{
                                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                    {
                                        borderWidth: '1px',
                                    },
                            }}
                        />
                    </Grid>
                    <Grid
                        container
                        spacing={1.3}
                        sx={{ marginTop: '20px', marginBottom: '20px' }}
                    >
                        <Grid item xs={6}>
                            <Box textAlign="center">
                                <input
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    multiple
                                    type="file"
                                    onChange={handleImageChange}
                                />
                                <label htmlFor="raised-button-file">
                                    <Button
                                        component="span"
                                        sx={{ color: '#333333' }}
                                    >
                                        <UploadIcon />
                                        Initiative Poster
                                    </Button>
                                    {loader ? (
                                        <Box sx={{ width: '100%' }}>
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
                                placeholder="Initiative Description"
                                label="description"
                                name="description"
                                variant="outlined"
                                fullWidth
                                required
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                multiline
                                rows={2}
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
                                placeholder="Initiative date/ duration"
                                label="duration"
                                name="duration"
                                variant="outlined"
                                fullWidth
                                required
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
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
                                placeholder="Initiative Partners"
                                label="partners"
                                name="partners"
                                variant="outlined"
                                fullWidth
                                required
                                value={partners}
                                onChange={(e) => setPartners(e.target.value)}
                                multiline
                                rows={2}
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
                                placeholder="initiative Details"
                                name="details"
                                variant="outlined"
                                fullWidth
                                required
                                multiline
                                rows={10}
                                value={details}
                                onChange={(e) => setDetails(e.target.value)}
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
                                            ? '#e76b50'
                                            : '#f36a11',
                                        fontSize: '14px',
                                        borderRadius: 10,
                                        color: '#e1e1e1',
                                    }}
                                    onClick={handlePublish}
                                >
                                    Publish
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                    <br />
                </Grid>
            </Container>
        </div>
    )
}

export default AddPresInitiative
