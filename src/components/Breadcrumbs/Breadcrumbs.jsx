import React from 'react';
import { Breadcrumbs, Button, Link, Typography, IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useLocation, useParams } from 'react-router-dom';
import users from '../../Data';
import './Breadcrumbs.scss'

function BreadcrumbComponent() {
    const location = useLocation();

    const getButtons = () => {
        if (location.pathname === '/') {
            return [
                <Button key="home" color="inherit" href="/" sx={{ color: "white", fontWeight: "bold" }}>
                    Главная
                </Button>
            ];
        }
        if (location.pathname.startsWith(`/user/`)) {
            let id = location.pathname.slice(6);
            const user = users.find(user => user.id === parseInt(id));
            return [
                <Button key="home" color="inherit" href="/" sx={{ color: "white", fontWeight: "bold" }}>
                    Главная
                </Button>,
                <Button key="user" color="inherit" href={`/user/${id}`} sx={{ color: "white", fontWeight: "bold" }}>
                    {user ? user.params.value.find(item => item.title === 'ФИО').value : 'Пользователь'}
                </Button>
            ];
        }
    };


    return (
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            {getButtons()}
        </Breadcrumbs>
    );
}

export default BreadcrumbComponent;
