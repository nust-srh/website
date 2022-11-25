import React from 'react'
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'

function DrawerComponent() {
    const [openDrawer, setOpenDrawer] = React.useState(false)
    return (
        <>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                anchor="right"
                PaperProps={{
                    sx: {
                        backgroundColor: '#050543',
                        color: '#fff',
                    },
                }}
            >
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link
                                to="/"
                                style={{
                                    textDecoration: 'none',
                                    fontSize: '15px',
                                    color: '#fff',
                                }}
                            >
                                Home
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link
                                to="/about"
                                style={{
                                    textDecoration: 'none',
                                    fontSize: '15px',
                                    color: '#fff',
                                }}
                            >
                                About
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link
                                to="/blog"
                                style={{
                                    textDecoration: 'none',
                                    fontSize: '15px',
                                    color: '#fff',
                                }}
                            >
                                Blog
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link
                                to="/alumni"
                                style={{
                                    textDecoration: 'none',
                                    fontSize: '15px',
                                    color: '#fff',
                                }}
                            >
                                Alumni
                            </Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon sx={{ color: '#fff' }} />
            </IconButton>
        </>
    )
}

export default DrawerComponent
