import React from 'react';
import { useParams } from 'react-router-dom';
import users from '../../Data';
import './Card.scss';
import CustomCard from '../../components/CustomCard/CustomCard';

const Card = () => {
    const { id } = useParams();
    const userData = users.find(user => user.id === parseInt(id)); // Находим пользователя по id

    if (!userData) {
        return <div>User not found</div>; // Обработка случая, если пользователь не найден
    }

    const { params, modules } = userData;

    return (
        <div className='container'>
            {/* <h2>User ID: {id}</h2> */}
            <CustomCard userId={id} moduleName="education" data={modules.education} />
            <CustomCard userId={id} moduleName="career" data={modules.career} />
            <CustomCard userId={id} moduleName="family" data={modules.family} />
        </div>
    );
};

export default Card;
