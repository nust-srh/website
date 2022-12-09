import { Button, Box, TextField, LinearProgress } from '@mui/material'
import { Container, Grid, Typography, Modal } from '@mui/material'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Upload from '@mui/icons-material/Upload'
import CardHeader from '@mui/material/CardHeader'

import {
    query,
    collection,
    onSnapshot,
    orderBy,
    updateDoc,
    doc,
} from 'firebase/firestore'
import { db, storage } from '../../../services/firebaseConfig'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import WelcomeMessage from './WelcomeMessage'

type ExecutiveMember = {
    imageUrl: string
    name: string
    office: string
    bio: string
    id: any
    index: any
}

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
const Executive = () => {
    const [loader, setLoader] = React.useState(false)
    const [open, setOpen] = React.useState(false)
    const [image, setImage] = React.useState<any>(null)
    const [progress, setProgress] = React.useState(0)
    const [name, setName] = React.useState('')
    const [bio, setBio] = React.useState('')
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const [expandedID, setExpandedID] = React.useState(-1)
    const [members, setMembers] = React.useState<ExecutiveMember[]>([])

    const handleImageChange = (e: any) => {
        setImage(e.target.files[0])
    }

    const handleExpandClick = (id: any) => {
        if (expandedID === id) {
            setExpandedID(-1)
        } else {
            setExpandedID(id)
        }
    }

    React.useEffect(() => {
        const q = query(collection(db, 'Executive'), orderBy('index', 'asc'))
        const unsub = onSnapshot(q, (querySnapshot) => {
            let membersArray: any[] = []
            querySnapshot.forEach((doc) => {
                membersArray.push({ ...doc.data(), id: doc.id })
            })
            setMembers(membersArray)
        })
        return () => unsub()
    }, [])

    const handleUpdate = (id: any) => {
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
                        const ExecutiveRef = doc(
                            db,
                            'Executive',
                            expandedID !== -1 ? expandedID : id
                        )
                        await updateDoc(ExecutiveRef, {
                            name: name,
                            bio: bio,
                            imageUrl: downloadURL,
                        })
                            .then(() => {
                                setLoader(false)
                                setProgress(0)
                                alert('Picture Successfully Published')
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
        setBio('')
        setImage('')
    }

    return (
        <div>
            <Container
                maxWidth="lg"
                sx={{ alignItems: 'center', justifyContent: 'center' }}
            >
                <WelcomeMessage/>
                <Typography
                    align="center"
                    variant="h5"
                    sx={{ fontWeight: 'bold' }}
                >
                    Current Executive
                </Typography>
                <Grid
                    container
                    spacing={3}
                    alignItems="center"
                    justifyContent="center"
                    sx={{ marginTop: '15px' }}
                >
                    {members.map((member) => (
                        <Grid item lg={3} md={3} xs={12} key={member.index}>
                            <Card
                                sx={{ maxWidth: '100%', borderRadius: '0px' }}
                            >
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={member.imageUrl}
                                    alt={member.name}
                                    sx={{ maxWidth: '300' }}
                                />
                                <CardHeader
                                    title={member.name}
                                    subheader={member.office}
                                    sx={{ height: '80px' }}
                                />
                                <CardActions disableSpacing>
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
                                                                    display:
                                                                        'none',
                                                                }}
                                                                id="raised-button-file"
                                                                multiple
                                                                type="file"
                                                                onChange={
                                                                    handleImageChange
                                                                }
                                                            />
                                                            <label htmlFor="raised-button-file">
                                                                <Button
                                                                    component="span"
                                                                    sx={{
                                                                        color: '#333333',
                                                                    }}
                                                                >
                                                                    <Upload />{' '}
                                                                    Executive's
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
                                                                            value={
                                                                                progress
                                                                            }
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
                                                                setName(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            sx={{
                                                                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                                                    {
                                                                        borderWidth:
                                                                            '1px',
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
                                                            value={bio}
                                                            onChange={(e) =>
                                                                setBio(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            sx={{
                                                                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                                                    {
                                                                        borderWidth:
                                                                            '1px',
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
                                                                    backgroundColor:
                                                                        loader
                                                                            ? '#d3d3d3'
                                                                            : '#f36a11',
                                                                    fontSize:
                                                                        '14px',
                                                                    borderRadius: 10,
                                                                    color: '#e1e1e1',
                                                                }}
                                                                onClick={() =>
                                                                    handleUpdate(
                                                                        member.id
                                                                    )
                                                                }
                                                            >
                                                                Publish
                                                            </Button>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Modal>
                                    </Box>
                                    <IconButton
                                        onClick={() =>
                                            handleExpandClick(member?.id)
                                        }
                                        aria-label="show more"
                                        sx={{
                                            margin: '0 auto',
                                            color: '#f36a11',
                                        }}
                                    >
                                        <ExpandMoreIcon fontSize="large" />
                                    </IconButton>
                                </CardActions>
                                <Collapse
                                    in={member.id === expandedID ? true : false}
                                    timeout="auto"
                                    unmountOnExit
                                >
                                    <CardContent>
                                        <Typography paragraph>
                                            {member.bio}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                backgroundColor: '#f36a11',
                                                color: '#fff',
                                            }}
                                            onClick={handleOpen}
                                        >
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Collapse>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default Executive
