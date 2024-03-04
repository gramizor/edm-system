import React from 'react'
import AssignmentIcon from '@mui/icons-material/Assignment';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import BreadcrumbComponent from '../Breadcrumbs/Breadcrumbs';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <AssignmentIcon />
                </IconButton>
                <BreadcrumbComponent />
            </Toolbar>
        </AppBar>
    )
}

export default Header