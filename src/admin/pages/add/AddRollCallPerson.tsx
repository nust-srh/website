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

import { Timestamp, collection, addDoc, doc } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage, db } from '../../../services/firebaseConfig'
import { useParams } from 'react-router-dom'

const AddPresident = () => {
    const {year} = useParams()
    const [loader, setLoader] = React.useState(false)
    const [name, setName] = React.useState('')
    const [program, setProgram] = React.useState('')
    const [image, setImage] = React.useState<any>(null)
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
                    const PeersRef = doc(db,  'RollCall', `${year}`)
                    addDoc(collection(PeersRef, 'educators'), {
                        name: name,
                        program: program,
                        imageUrl: downloadURL,
                        year: year,
                        createdAt: Timestamp.now().toDate(),
                    })
                        .then(() => {
                            setLoader(false)
                            setProgress(0)
                            alert(`Details Successfully Published for year ${year}`)
                        })
                        .catch((error) => {
                            alert(error.message)
                            setLoader(false)
                        })
                })
            }
        )

        setName('')
        setProgram('')
        setImage('')
    }
    
    return (
        <div>
            <Container maxWidth="sm" sx={{ paddingTop: '30px' }}>
                <Typography variant="body1" align="center" sx={{fontStyle: 'italic', color: '#f36a11'}}>
                    Add Peer Educator
                </Typography>
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
                                    <UploadIcon /> Peer Educator's Portrait
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
                            placeholder=" Name"
                            label="Name"
                            name="name"
                            variant="outlined"
                            fullWidth
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                            placeholder="Program Studied"
                            label="Program"
                            name="program"
                            variant="outlined"
                            fullWidth
                            required
                            value={program}
                            onChange={(e) => setProgram(e.target.value)}
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
            </Container>
        </div>
    )
}

export default AddPresident
