import React from 'react';
import { Breadcrumbs, Button, Link, Typography, IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useLocation, useParams } from 'react-router-dom'; // Подключаем хук для получения текущего пути и параметров URL
import users from '../../Data'; // Подключаем массив пользователей

function BreadcrumbComponent() {
    const location = useLocation(); // Получаем текущий путь
    const { id } = useParams(); // Получаем параметр id из URL

    // Находим пользователя по идентификатору
    const user = users.find(user => user.id === parseInt(id));

    // Определяем, какие кнопки должны отображаться в зависимости от текущего пути
    const getButtons = () => {
        switch (location.pathname) {
            case '/':
                return (
                    <>
                        <Button color="inherit" href="/" sx={{ color: "white" }}>
                            Главная
                        </Button>
                    </>
                );
            case `/user/${id}`:
                return (
                    <>
                        <Button color="inherit" href="/" sx={{ color: "white" }}>
                            Главная
                        </Button>
                        <Button color="inherit" href={`/user/${id}`} sx={{ color: "white" }}>
                            {user ? user.full_name : 'Пользователь'}
                        </Button>
                    </>
                );
            default:
                return (
                    <>
                        <Button color="inherit" href="/" sx={{ color: "white" }}>
                            Главная
                        </Button>
                    </>
                );
        }
    };

    return (
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            {getButtons()}
        </Breadcrumbs>
    );
}

export default BreadcrumbComponent;
