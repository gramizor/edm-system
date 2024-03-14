import React from 'react'
import AssignmentIcon from '@mui/icons-material/Assignment';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import CustomBreadcrumbs from '../CustomBreadcrumbs/CustomBreadcrumbs';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <AssignmentIcon />
                </IconButton>
                <CustomBreadcrumbs />
            </Toolbar>
        </AppBar>
    )
}

export default Header