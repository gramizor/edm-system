import React from 'react';
import { Breadcrumbs, Button, Link, Typography, IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useLocation, useParams } from 'react-router-dom'; // Подключаем хук для получения текущего пути и параметров URL
import users from '../../Data'; // Подключаем массив пользователей

function BreadcrumbComponent() {
    const location = useLocation(); // Получаем текущий путь
    // Находим пользователя по идентификатору

    // Определяем, какие кнопки должны отображаться в зависимости от текущего пути
    // Определяем, какие кнопки должны отображаться в зависимости от текущего пути
    const getButtons = () => {
        if (location.pathname === '/') {
            return [
                <Button key="home" color="inherit" href="/" sx={{ color: "white" }}>
                    Главная
                </Button>
            ];
        }
        if (location.pathname.startsWith(`/user/`)) {
            let id = location.pathname.slice(6);
            const user = users.find(user => user.id === parseInt(id));
            return [
                <Button key="home" color="inherit" href="/" sx={{ color: "white" }}>
                    Главная
                </Button>,
                <Button key="user" color="inherit" href={`/user/${id}`} sx={{ color: "white" }}>
                    {user ? user.params.value.find(item => item.title === 'Full name').full_name : 'Пользователь'}
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
