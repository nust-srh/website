import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';
import { BrowseGallery, Logout, PhotoAlbum } from '@mui/icons-material';



export const mainListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <Logout />
            </ListItemIcon>
            <ListItemText primary='Logout' />
        </ListItemButton>
        <Link to='/mambo/blog' style={{ textDecoration: 'none', color: '#333333' }}>
            <ListItemButton >
                <ListItemIcon>
                    <BrowseGallery />
                </ListItemIcon>
                <ListItemText primary='Blog Articles' />
            </ListItemButton>
        </Link>
        <Link to='/mambo/events' style={{ textDecoration: 'none', color: '#333333' }}>
            <ListItemButton >
                <ListItemIcon>
                    <BrowseGallery />
                </ListItemIcon>
                <ListItemText primary='Semester Events' />
            </ListItemButton>
        </Link>
        <Link to='/mambo/executive' style={{ textDecoration: 'none', color: '#333333' }}>
            <ListItemButton >
                <ListItemIcon>
                    <BrowseGallery />
                </ListItemIcon>
                <ListItemText primary='Executive' />
            </ListItemButton>
        </Link>
        <Link to='/mambo/roll-call' style={{ textDecoration: 'none', color: '#333333' }}>
            <ListItemButton >
                <ListItemIcon>
                    <BrowseGallery />
                </ListItemIcon>
                <ListItemText primary='Roll Call' />
            </ListItemButton>
        </Link>
        <Link to='/mambo/initiatives' style={{ textDecoration: 'none', color: '#333333' }}>
            <ListItemButton >
                <ListItemIcon>
                    <BrowseGallery />
                </ListItemIcon>
                <ListItemText primary='Presidents Initiatives' />
            </ListItemButton>
        </Link>
        <Link to='/mambo/presidents' style={{ textDecoration: 'none', color: '#333333' }}>
            <ListItemButton >
                <ListItemIcon>
                    <BrowseGallery />
                </ListItemIcon>
                <ListItemText primary='Presidents' />
            </ListItemButton>
        </Link>

    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component='div' inset>
            Saved reports
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary='Last Semester' />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary='Yearly' />
        </ListItemButton>
    </React.Fragment>
);