import { Container, Grid, Typography } from '@mui/material'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { query, collection, onSnapshot, orderBy } from 'firebase/firestore'
import { db } from '../../../services/firebaseConfig'


type ExecutiveMember = {
    imageUrl: string
    name: string
    office: string
    bio: string
    id: any
}


const Executive = () => {
    const [expandedID, setExpandedID] = React.useState(-1)
    const [expanded, setExpanded] = React.useState(false)
    const [members, setMembers] = React.useState<ExecutiveMember[]>([])

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


    return (
        <div style={{ marginTop: '40px', marginBottom: '20px' }}>
            <Container
                maxWidth="lg"
                sx={{ alignItems: 'center', justifyContent: 'center' }}
            >
                <Typography
                    align="center"
                    sx={{
                        color: '#f36a11',
                        fontSize: '1.9rem',
                        fontWeight: 'bold',
                    }}
                >
                    Our Current Executive
                </Typography>
                <Grid
                    container
                    spacing={3}
                    alignItems="center"
                    justifyContent="center"
                    sx={{ marginTop: '15px' }}
                >
                    {members.map((member) => (
                        <Grid item lg={3} md={3} xs={12}>
                            <Card
                                sx={{ maxWidth: '100%', borderRadius: '0px' }}
                            >
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={member.imageUrl}
                                    alt={member.name}
                                    sx={{ maxWidth: '300' }}
                                />
                                <CardHeader
                                    titleTypographyProps={{
                                        fontSize: 22,
                                    }}
                                    subheaderTypographyProps={{
                                        fontSize: 16,
                                    }}
                                    title={member.name}
                                    subheader={member.office}
                                    sx={{ height: '70px' }}
                                />
                                <CardActions disableSpacing>
                                    <IconButton
                                        onClick={() =>
                                            handleExpandClick(member.id)
                                        }
                                        aria-expanded={expanded}
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
