import React from 'react';
import { Breadcrumbs, Button, Link, Typography, IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useLocation, useParams } from 'react-router-dom';
import users from '../../Data';
import './CustomBreadcrumbs.scss'

function CustomBreadcrumbs() {
    const location = useLocation();

    const getButtons = () => {
        if (location.pathname === '/') {
            return [
                <Button key="home" color="inherit" href={`/edm-system#`} sx={{ color: "white", fontWeight: "bold" }}>
                    Главная
                </Button>
            ];
        }
        if (location.pathname.startsWith(`/user/`)) {
            const id = location.pathname.slice(6);
            const user = users.find(user => user.id === parseInt(id));
            return [
                <Button key="home" color="inherit" href={`/edm-system#`} sx={{ color: "white", fontWeight: "bold" }}>
                    Главная
                </Button>,
                <Button key="user" color="inherit" href={`/edm-system#/user/${id}`} sx={{ color: "white", fontWeight: "bold" }}>
                    {user ? user.params.value.find(item => item.title === 'ФИО').value : 'Пользователь'}
                </Button>
            ];
        }
    };


    return (
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" sx={{ color: "white" }} />} aria-label="breadcrumb">
            {getButtons()}
        </Breadcrumbs>
    );
}

export default CustomBreadcrumbs;